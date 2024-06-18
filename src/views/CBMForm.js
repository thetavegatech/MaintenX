import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { addDays, addWeeks, addMonths } from 'date-fns'

const CBMForm = () => {
  const [formData, setFormData] = useState({
    assetName: '',
    location: '',
    assetType: '',
    installationDate: '',
    cbmScheduleDate: '',
    cbmFrequency: '',
    nextCbmDate: '',
    status: 'Pending',
  })

  const [message, setMessage] = useState('')
  const [assets, setAssets] = useState([])

  const calculateNextCbmDate = (scheduleDate, frequency) => {
    if (!scheduleDate || !frequency) return ''

    const date = new Date(scheduleDate)
    switch (frequency) {
      case 'daily':
        return addDays(date, 1).toISOString().split('T')[0]
      case 'weekly':
        return addWeeks(date, 1).toISOString().split('T')[0]
      case 'fifteen days':
        return addDays(date, 15).toISOString().split('T')[0]
      case 'monthly':
        return addMonths(date, 1).toISOString().split('T')[0]
      case 'quarterly':
        return addMonths(date, 3).toISOString().split('T')[0]
      case 'half year':
        return addMonths(date, 6).toISOString().split('T')[0]
      case 'yearly':
        return addMonths(date, 12).toISOString().split('T')[0]
      default:
        return ''
    }
  }

  useEffect(() => {
    // Fetch asset names from the API
    const fetchAssets = async () => {
      try {
        const response = await axios.get('https://backendmaintenx.onrender.com/api/assets')
        setAssets(response.data)
      } catch (error) {
        console.error('Error fetching assets:', error)
      }
    }

    fetchAssets()
  }, [])

  const handleChange = async (e) => {
    const { name, value } = e.target
    let updatedFormData = {
      ...formData,
      [name]: value,
    }

    if (name === 'assetName') {
      try {
        const response = await axios.get(
          `https://backendmaintenx.onrender.com/api/locations/${value}`,
        )
        if (response.data && response.data.Location) {
          updatedFormData = {
            ...updatedFormData,
            location: response.data.Location,
          }
        }
      } catch (error) {
        console.error('Error fetching location:', error)
      }
    }

    if (name === 'cbmScheduleDate' || name === 'cbmFrequency') {
      const { cbmScheduleDate, cbmFrequency } = updatedFormData
      const nextCbmDate = calculateNextCbmDate(cbmScheduleDate, cbmFrequency)
      updatedFormData = {
        ...updatedFormData,
        nextCbmDate,
      }
    }

    setFormData(updatedFormData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://backendmaintenx.onrender.com/api/cbm', formData) // Adjust URL as needed
      setMessage('CBM record created successfully!')
      setFormData({
        assetName: '',
        location: '',
        assetType: '',
        installationDate: '',
        cbmScheduleDate: '',
        cbmFrequency: '',
        nextCbmDate: '',
        status: 'Pending',
      })
    } catch (error) {
      setMessage('Error creating CBM record.')
      console.error('There was an error creating the CBM record!', error)
    }
  }

  return (
    <div
      className="container"
      style={{
        border: '1px solid #ccc',
        padding: '5px',
        backgroundColor: '',
        borderRadius: '10px',
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
        height: '50%',
        width: '100%',
      }}
    >
      <h4>Create CBM Record</h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <label>Asset Name:</label>
            <select
              name="assetName"
              className="form-control col-sm-6"
              value={formData.assetName}
              onChange={handleChange}
              required
            >
              <option value="">Select Asset</option>
              {assets.map((asset) => (
                <option key={asset._id} value={asset.name}>
                  {asset.AssetName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              className="form-control col-sm-4"
              value={formData.location}
              readOnly
              required
            />
          </div>
          <div className="col-md-4">
            <label>CBM Schedule Date:</label>
            <input
              type="date"
              name="cbmScheduleDate"
              className="form-control col-sm-6"
              value={formData.cbmScheduleDate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label>CBM Frequency:</label>
            <select
              type="text"
              name="cbmFrequency"
              className="form-control col-sm-6"
              value={formData.cbmFrequency}
              onChange={handleChange}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="fifteen days">Fifteen Days</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="half year">Half Year</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Next CBM Date:</label>
            <input
              type="date"
              name="nextCbmDate"
              className="form-control col-sm-6"
              value={formData.nextCbmDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default CBMForm
