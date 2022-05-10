import React, { useState, useEffect } from 'react'
import { accountUser, editUser } from '../../axios/userAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const [form, setForm] = useState({
        name: ""
    })

    const navigation = useNavigate()
    const params = useParams()

    const getUserInfo = () => {
        const { id } = params
        accountLecturer(+id, result => {
            setForm({
                name: result.name
            })
            console.log(result)
        })
    }

    useEffect(() => {
        getUserInfo()
    }, [])


    const submitHandler = () => {
        editUser(+params.id, form)
        navigation('/users')
    }

    return (
        <>
            <div className="row my-3">
                <div className="w-100 text-center">
                    <h5>Edit User</h5>
                </div>
                <div className="w-50 mx-auto">
                    <hr />
                    <div className="mb-3">
                        <label>Name: </label>
                        <input
                            value={form.name}
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

export default EditUser