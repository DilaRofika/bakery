import React, { useState, useEffect } from 'react'
import { getItems, removeItem } from '../../axios/itemAxios'
import LoadingBar from '../../helpers/LoadingBar'
import {
  Link, useNavigate
} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

const ListItems = () => {
  const [items, setItems] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // callback untuk mengambil data users dari folder axios
    getItems(result => setItems(result))
  }, [])

  const deleteHandler = (id) => {
    removeItem(id)
    navigate('/items')
  }

  return (
    <>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link to="/items/create" className="btn btn-sm btn-primary my-2">
              <span className="me-2">
                <FiPlus></FiPlus>
              </span>
              Add Item
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-borderd">
              <thead>
                <tr className="table-primary">
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Id</th>
                  <th>Brand Id</th>
                  <th>Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.length > 0 ?
                    users.map(user => {
                      const { id, name } = user
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{UserId}</td>
                          <td>{BrandId}</td>
                          <td>{price}</td>
                          <td>{image}</td>
                          <td>
                            <Link to={`/items/edit/${id}`} className="btn btn-sm btn-info">Edit</Link>
                            <button onClick={() => deleteHandler(+id)} className="btn btn-sm btn-danger">Delete</button>
                          </td>
                        </tr>
                      )
                    }) : <LoadingBar></LoadingBar>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListItems