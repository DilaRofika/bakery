import React, { useState } from 'react'
import { addItem } from '../../axios/itemAxios'
import { useNavigate } from 'react-router-dom'

const CreateItem = () => {
  const [form, setForm] = useState({
    name: "",
    UserId: "",
    BrandId: "",
    price: "",
    image: ""
  })

  const navigation = useNavigate()

  const submitHandler = () => {
    addItem(form)
    navigation('/items')
  }

  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h5>Create Item</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="mb-3">
            <label>Name: </label>
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"></input>
          </div>
          <div className="mb-3">
            <label>User Id: </label>
            <input
              onChange={(e) => setForm({ ...form, UserId: e.target.value })}
              type="text"
              className="form-control"></input>
          </div>
          <div className="mb-3">
            <label>Brand Id: </label>
            <input
              onChange={(e) => setForm({ ...form, BrandId: e.target.value })}
              type="text"
              className="form-control"></input>
          </div>
          <div className="mb-3">
            <label>Price: </label>
            <input
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              type="text"
              className="form-control"></input>
          </div>
          <div className="mb-3">
            <label>Image: </label>
            <input
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              type="text"
              className="form-control"></input>
          </div>
          <div className="mb-3">
            <button onClick={() => submitHandler()} className="btn btn-block btn-primary"> Submit </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateItem