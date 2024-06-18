import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { CTable, CTableHead, CButton } from '@coreui/react'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

const AssetTable = () => {
  const [cbms, setCbms] = useState([])
  const [filteredCbms, setFilteredCbms] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [scannedData, setScannedData] = useState(null)

  useEffect(() => {
    axios
      .get('https://backendmaintenx.onrender.com/api/cbm')
      .then((response) => {
        const cbmData = Array.isArray(response.data) ? response.data : [response.data]
        setCbms(cbmData)
        setFilteredCbms(cbmData)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        alert('Error fetching data')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const updateNextDate = async () => {
      const today = new Date()
      const updatedAssets = await Promise.all(
        cbms.map(async (cbm) => {
          const nextDate = new Date(cbm.nextCbmDate)
          if (today >= nextDate) {
            let daysToAdd = 1
            switch (cbm.cbmFrequency.toLowerCase()) {
              case 'daily':
                daysToAdd = 1
                break
              case 'weekly':
                daysToAdd = 7
                break
              case 'fifteen days':
                daysToAdd = 15
                break
              case 'monthly':
                daysToAdd = 30
                break
              case 'quarterly':
                daysToAdd = 90
                break
              case 'half year':
                daysToAdd = 180
                break
              case 'yearly':
                daysToAdd = 365
                break
              default:
                daysToAdd = 1
            }
            nextDate.setDate(nextDate.getDate() + daysToAdd)
            cbm.nextCbmDate = nextDate.toISOString().split('T')[0]
            cbm.status = 'Pending'
          }
          return cbm
        }),
      )
      setCbms(updatedAssets)
      setFilteredCbms(updatedAssets)
      try {
        await axios.put('https://backendmaintenx.onrender.com/api/cbmupdateRecords', {
          cbms: updatedAssets,
        })
      } catch (error) {
        console.error('Error updating Next Date in the database:', error)
      }
    }

    const scheduleUpdate = () => {
      const now = new Date()
      const nextUpdate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        14,
        31,
        0,
        0, // Set to 11:30 PM
      )

      // If 11:30 PM has already passed for today, schedule for tomorrow
      if (now >= nextUpdate) {
        nextUpdate.setDate(nextUpdate.getDate() + 1)
      }

      const timeToNextUpdate = nextUpdate - now

      setTimeout(() => {
        updateNextDate()
        setInterval(updateNextDate, 24 * 60 * 60 * 1000) // Run every 24 hours
      }, timeToNextUpdate)
    }

    scheduleUpdate()
  }, [cbms])

  const deleteData = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this data?')
    if (isConfirmed) {
      axios
        .delete(`https://backendmaintenx.onrender.com/api/cbm/${id}`)
        .then((response) => {
          const newCbms = cbms.filter((cbm) => cbm._id !== id)
          setCbms(newCbms)
          setFilteredCbms(newCbms)
          setMessage('Data successfully deleted!')
          setTimeout(() => {
            setMessage('')
          }, 2000)
        })
        .catch((error) => {
          console.error('Error deleting data:', error)
          setMessage('Error deleting data. Please try again.')
          setTimeout(() => {
            setMessage('')
          }, 2000)
        })
    }
  }

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase()
    const filteredCbms = cbms.filter((cbm) => {
      const locationLower = (cbm.location || '').toLowerCase()
      const assetNameLower = (cbm.assetName || '').toLowerCase()
      return locationLower.includes(query) || assetNameLower.includes(query)
    })
    setFilteredCbms(filteredCbms)
    setSearchQuery(query)
  }

  const handleScan = (data) => {
    if (data) {
      setScannedData(data)
    }
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div className="container">
      <NavLink to="/cbmForm">
        <CButton className="mb-2" style={{ marginTop: '5px', backgroundColor: '#000026' }}>
          Add New
        </CButton>
      </NavLink>
      <label htmlFor="searchTask" style={{ marginLeft: '70%' }}>
        <span role="img" aria-label="search-icon"></span>
      </label>
      <input
        placeholder="Search by Asset/Location"
        style={{
          marginBottom: '10px',
          padding: '8px',
          border: '1px solid ',
          borderRadius: '4px',
          transition: 'border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
        }}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <CTable bordered striped hover responsive>
        <CTableHead color="dark">
          <tr>
            <th style={{ textAlign: 'center' }}>Sr No</th>
            <th style={{ textAlign: 'center' }}>Asset Name</th>
            <th style={{ textAlign: 'center' }}>Location</th>
            <th style={{ textAlign: 'center' }}>Installation Date</th>
            <th style={{ textAlign: 'center' }}>CBM Schedule Date</th>
            <th style={{ textAlign: 'center' }}>CBM Frequency</th>
            <th style={{ textAlign: 'center' }}>Next CBM Date</th>
            <th style={{ textAlign: 'center' }}>Status</th>
            <th style={{ textAlign: 'center' }}>Edit</th>
            <th style={{ textAlign: 'center' }}>Delete</th>
          </tr>
        </CTableHead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="12" style={{ textAlign: 'center' }}>
                <p>Loading...</p>
              </td>
            </tr>
          ) : (
            <>
              {message && (
                <tr>
                  <td
                    colSpan="12"
                    style={{ textAlign: 'center', fontStyle: 'italic', color: 'red' }}
                  >
                    {message}
                  </td>
                </tr>
              )}
              {filteredCbms.map((cbm, index) => (
                <tr key={cbm._id}>
                  <td style={{ textAlign: 'center' }}>{index + 1}</td>
                  <td style={{ textAlign: 'center' }}>{cbm.assetName}</td>
                  <td style={{ textAlign: 'center' }}>{cbm.location}</td>
                  <td style={{ textAlign: 'center' }}>
                    {new Date(cbm.installationDate).toLocaleDateString()}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {new Date(cbm.cbmScheduleDate).toLocaleDateString()}
                  </td>
                  <td style={{ textAlign: 'center' }}>{cbm.cbmFrequency}</td>
                  <td style={{ textAlign: 'center' }}>
                    {new Date(cbm.nextCbmDate).toLocaleDateString()}
                  </td>
                  <td style={{ textAlign: 'center' }}>{cbm.status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <NavLink to={`/editcbm/${cbm._id}`} style={{ color: '#000080' }}>
                      <FaEdit />
                    </NavLink>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      className="btn"
                      onClick={() => deleteData(cbm._id)}
                      style={{ color: 'red' }}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </CTable>
      <div>
        {scannedData && (
          <div>
            <h3>Scanned Data:</h3>
            <p>{scannedData}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AssetTable
