import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./AddEdit.css"
import { useAddContactMutation } from '../services/contactsApi'

const initialState = {
  name: "",
  email: "",
  contact: ""
}

const AddEdit = () => {
  const [formValue, setFormValue] = useState(initialState)
  const [addContact] = useAddContactMutation()
  const { name, email, contact } = formValue
  const navigate = useNavigate()

  const handleInputChange = (e: any) => {
    let { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!name && !email && !contact) {
      toast.error("Please fill all the fields!")
    } else {
      await addContact(formValue)
      navigate("/")
      toast.success("Contact Added Successfully!")
    }
  }

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