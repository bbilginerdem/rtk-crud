import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./AddEdit.css"

const initialState = {
  name: "",
  email: "",
  contact: ""
}

const AddEdit = () => {
  const [formValue, setFormValue] = useState(initialState)
  const { name, email, contact } = formValue
  const navigate = useNavigate()

  const handleInputChange = (e: any) => { }
  const handleSubmit = (e: any) => { }

  return (
    <div style={{ marginTop: "100px" }}>
      <form style={{
        margin: "auto",
        padding: '15px',
        maxWidth: '400px',
        alignContent: 'center',
      }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Name..." value={name} onChange={handleInputChange} />
        <label htmlFor="emaıl">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Email..." value={email} onChange={handleInputChange} />
        <label htmlFor="contact">Contact</label>
        <input type="number" id="contact" name="contact" placeholder="Enter Contact Number..." value={contact} onChange={handleInputChange} />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddEdit