import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { CTable, CTableHead, CButton } from '@coreui/react'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { QrReader } from '@blackbox-vision/react-qr-reader'
import '../User/user.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const AssetTable = () => {
  const [assets, setAssets] = useState([])
  const [filteredAssets, setFilteredAssets] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [showQrReader, setShowQrReader] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://backendmaintenx.onrender.com/api/assets')
      .then((response) => {
        const assetsData = Array.isArray(response.data) ? response.data : [response.data]
        setAssets(assetsData)
        setFilteredAssets(assetsData)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        alert('Error fetching data')
        setLoading(false)
      })
  }, [])

  const deleteData = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this data?')
    if (isConfirmed) {
      axios
        .delete(`https://backendmaintenx.onrender.com/api/assets/${id}`)
        .then(() => {
          const newAssets = assets.filter((asset) => asset._id !== id)
          setAssets(newAssets)
          setFilteredAssets(newAssets)
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
    const filteredAssets = assets.filter((asset) => {
      const locationLower = (asset.Location || '').toLowerCase()
      const assetNameLower = (asset.AssetName || '').toLowerCase()
      return locationLower.includes(query) || assetNameLower.includes(query)
    })
    setFilteredAssets(filteredAssets)
    setSearchQuery(query)
  }

  const handleResult = (result, error) => {
    if (!!result) {
      console.log('QR Code Result:', result.text)
      navigate(`/assetRecord/${result.text}`)
      setShowQrReader(false)
    }

    if (!!error) {
      console.info(error)
    }
  }

  return (
    <div className="container">
      <NavLink to="/assetForm">
        <CButton
          // color="dark"
          className="mb-2"
          style={{ marginTop: '5px', margin: '10px', backgroundColor: '#000026' }}
        >
          Add New
        </CButton>
      </NavLink>
      <CButton
        // color="info"
        style={{ marginTop: '5px', margin: '10px', backgroundColor: '#000026' }}
        className="mb-2"
        onClick={() => setShowQrReader(!showQrReader)}
      >
        {showQrReader ? 'Close QR Scanner' : 'Scan QR Code'}
      </CButton>
      {showQrReader && (
        <div style={{ width: '100%' }}>
          <QrReader
            onResult={handleResult}
            constraints={{ facingMode: 'environment' }}
            style={{ width: '100%' }}
          />
        </div>
      )}
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
      <Table style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Thead style={{ backgroundColor: '#000026', color: 'white' }}>
          <Tr style={{ padding: '20px' }}>
            <Th style={{ textAlign: 'center' }}>Sr No</Th>
            <Th style={{ textAlign: 'center' }}>Machine Name</Th>
            <Th style={{ textAlign: 'center' }}>Machine Type</Th>
            <Th style={{ textAlign: 'center' }}>Location</Th>
            <Th style={{ textAlign: 'center' }}>QR Code</Th>
            <Th style={{ textAlign: 'center' }}>Edit</Th>
            <Th style={{ textAlign: 'center' }}>Delete</Th>
            {/* <th>Images</th> */}
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td colSpan="8" style={{ textAlign: 'center' }}>
                <p>Loading...</p>
              </Td>
            </Tr>
          ) : (
            <>
              {message && (
                <Tr>
                  <Td
                    colSpan="8"
                    style={{ textAlign: 'center', fontStyle: 'italic', color: 'red' }}
                  >
                    {message}
                  </Td>
                </Tr>
              )}
              {filteredAssets.map((asset) => (
                <Tr key={asset._id}>
                  <Td style={{ textAlign: 'center' }}>{asset.SrNo}</Td>
                  <Td style={{ textAlign: 'center' }}>{asset.AssetName}</Td>
                  <Td style={{ textAlign: 'center' }}>{asset.MachineType}</Td>
                  <Td style={{ textAlign: 'center' }}>{asset.Location}</Td>
                  <Td style={{ textAlign: 'center' }}>
                    {asset.qrCode && (
                      <img src={asset.qrCode} alt="QR Code" width={50} height={50} />
                    )}
                  </Td>
                  <Td style={{ textAlign: 'center' }}>
                    <NavLink to={`/editasset/${asset._id}`} style={{ color: '#000080' }}>
                      <FaEdit />
                    </NavLink>
                  </Td>
                  <Td style={{ textAlign: 'center' }}>
                    <button
                      className="btn"
                      onClick={() => deleteData(asset._id)}
                      style={{ color: 'red' }}
                    >
                      <MdDelete />
                    </button>
                  </Td>
                  {/* <td style={{ textAlign: 'center' }}>
                    <NavLink to={`/assetRecord/${asset._id}`}>
                      <img src={asset.Image} height={50} width={50} alt="Asset" />
                    </NavLink>
                  </td> */}
                </Tr>
              ))}
            </>
          )}
        </Tbody>
      </Table>
    </div>
  )
}

export default AssetTable
