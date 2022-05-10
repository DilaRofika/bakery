import React, { useState } from 'react'
import { addBrand } from '../../axios/brandAxios'
import { useNavigate } from 'react-router-dom'

const CreateBrand = () => {
  const [form, setForm] = useState({
    name: "",
    image:""

  })

  const navigation = useNavigate()

  const submitHandler = () => {
    addUser(form)
    navigation('/brands')
  }

  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h5>Create Brand</h5>
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

export default CreateBrand