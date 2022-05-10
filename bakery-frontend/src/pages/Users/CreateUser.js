import React, { useState } from 'react'
import { addUser } from '../../axios/userAxios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const [form, setForm] = useState({
    name: ""
  })

  const navigation = useNavigate()

  const submitHandler = () => {
    addUser(form)
    navigation('/users')
  }

  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <h5>Create User</h5>
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
            <button onClick={() => submitHandler()} className="btn btn-block btn-primary"> Submit </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateUser