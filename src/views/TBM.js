import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { CTable, CTableHead, CButton } from '@coreui/react'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
// import QrReader from 'react-qr-reader'

const TbmTable = () => {
  const [tbms, setTbms] = useState([])
  const [filteredTbms, setFilteredTbms] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [scannedData, setScannedData] = useState(null)

  useEffect(() => {
    axios
      .get('https://backendmaintenx.onrender.com/api/tbm')
      .then((response) => {
        const tbmData = Array.isArray(response.data) ? response.data : [response.data]
        setTbms(tbmData)
        setFilteredTbms(tbmData)
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
        tbms.map(async (tbm) => {
          const nextDate = new Date(tbm.nextTbmDate)
          if (today >= nextDate) {
            let daysToAdd = 1
            switch (tbm.tbmFrequency.toLowerCase()) {
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
            tbm.nextTbmDate = nextDate.toISOString().split('T')[0]
            tbm.status = 'Pending'
          }
          return tbm
        }),
      )
      setTbms(updatedAssets)
      setFilteredTbms(updatedAssets)
      try {
        await axios.put('https://backendmaintenx.onrender.com/api/tbmupdateRecords', {
          tbms: updatedAssets,
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
        27,
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
  }, [tbms])

  const deleteData = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this data?')
    if (isConfirmed) {
      axios
        .delete(`https://backendmaintenx.onrender.com/api/tbm/${id}`)
        .then((response) => {
          const newTbms = tbms.filter((tbm) => tbm._id !== id)
          setTbms(newTbms)
          setFilteredTbms(newTbms)
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
    const filteredTbms = tbms.filter((tbm) => {
      const locationLower = (tbm.location || '').toLowerCase()
      const assetNameLower = (tbm.assetName || '').toLowerCase()
      return locationLower.includes(query) || assetNameLower.includes(query)
    })
    setFilteredTbms(filteredTbms)
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
      <NavLink to="/tbmForm">
        <CButton
          // color="info"
          className="mb-2"
          style={{ marginTop: '5px', backgroundColor: '#000026' }}
        >
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
            {/* <th style={{ textAlign: 'center' }}>Asset Type</th> */}
            <th style={{ textAlign: 'center' }}>Installation Date</th>
            <th style={{ textAlign: 'center' }}>TBM Schedule Date</th>
            <th style={{ textAlign: 'center' }}>TBM Frequency</th>
            <th style={{ textAlign: 'center' }}>Next TBM Date</th>
            <th style={{ textAlign: 'center' }}>Status</th>
            {/* <th style={{ textAlign: 'center' }}>QR Code</th> */}
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
              {filteredTbms.map((tbm, index) => (
                <tr key={tbm._id}>
                  <td style={{ textAlign: 'center' }}>{index + 1}</td>
                  <td style={{ textAlign: 'center' }}>{tbm.assetName}</td>
                  <td style={{ textAlign: 'center' }}>{tbm.location}</td>
                  {/* <td style={{ textAlign: 'center' }}>{tbm.assetType}</td> */}
                  <td style={{ textAlign: 'center' }}>
                    {new Date(tbm.installationDate).toLocaleDateString()}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {new Date(tbm.tbmScheduleDate).toLocaleDateString()}
                  </td>
                  <td style={{ textAlign: 'center' }}>{tbm.tbmFrequency}</td>
                  <td style={{ textAlign: 'center' }}>
                    {new Date(tbm.nextTbmDate).toLocaleDateString()}
                  </td>
                  <td style={{ textAlign: 'center' }}>{tbm.status}</td>
                  {/* <td style={{ textAlign: 'center' }}>
                    {tbm.qrCode && <img src={tbm.qrCode} alt="QR Code" width={50} height={50} />}
                  </td> */}
                  <td style={{ textAlign: 'center' }}>
                    <NavLink to={`/edittbm/${tbm._id}`} style={{ color: '#000080' }}>
                      <FaEdit />
                    </NavLink>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      className="btn"
                      onClick={() => deleteData(tbm._id)}
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
        {/* <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '300px' }}
        /> */}
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

export default TbmTable
