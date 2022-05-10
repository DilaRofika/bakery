import React, { useState, useEffect } from 'react'
import { accountBrand, editBrand } from '../../axios/userBrand'
import { useNavigate, useParams } from 'react-router-dom'

const EditBrand = () => {
    const [form, setForm] = useState({
        name: "",
        image:""
    })

    const navigation = useNavigate()
    const params = useParams()

    const getBrandInfo = () => {
        const { id } = params
        accountLecturer(+id, result => {
            setForm({
                name: result.name
            })
            console.log(result)
        })
    }

    useEffect(() => {
        getBrandInfo()
    }, [])


    const submitHandler = () => {
        editBrand(+params.id, form)
        navigation('/brands')
    }

    return (
        <>
            <div className="row my-3">
                <div className="w-100 text-center">
                    <h5>Edit Brand</h5>
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
                        <label>Image: </label>
                        <input
                            value={form.image}
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

export default EditBrand