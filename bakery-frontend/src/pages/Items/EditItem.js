import React, { useState, useEffect } from 'react'
import { accountItem, editItem } from '../../axios/itemAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditItem = () => {
    const [form, setForm] = useState({
        name: "",
        UserId: "",
        BrandId: "",
        price: "",
        image: ""
    })

    const navigation = useNavigate()
    const params = useParams()

    const getItemInfo = () => {
        const { id } = params
        accountLecturer(+id, result => {
            setForm({
                name: result.name,
                UserId: result.UserId,
                BrandId: result.BrandId,
                price: result.price,
                image: result.image
            })
            console.log(result)
        })
    }

    useEffect(() => {
        getItemInfo()
    }, [])


    const submitHandler = () => {
        editItem(+params.id, form)
        navigation('/items')
    }

    return (
        <>
            <div className="row my-3">
                <div className="w-100 text-center">
                    <h5>Edit Item</h5>
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
                        <label>User Id: </label>
                        <input
                            value={form.UserId}
                            onChange={(e) => setForm({ ...form, UserId: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>Brand Id: </label>
                        <input
                            value={form.BrandId}
                            onChange={(e) => setForm({ ...form, BrandId: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>price: </label>
                        <input
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
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

export default EditItem