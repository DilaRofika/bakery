import React, { useState, useEffect } from 'react'
import { getBrands, removeBrand } from '../../axios/brandAxios'
import LoadingBar from '../../helpers/LoadingBar'
import {
  Link, useNavigate
} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

const ListBrands = () => {
  const [brands, setBrands] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // callback untuk mengambil data users dari folder axios
    getBrands(result => setBrands(result))
  }, [])

  const deleteHandler = (id) => {
    removeBrand(id)
    navigate('/brands')
  }

  return (
    <>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link to="/brands/create" className="btn btn-sm btn-primary my-2">
              <span className="me-2">
                <FiPlus></FiPlus>
              </span>
              Add Brand
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-borderd">
              <thead>
                <tr className="table-primary">
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {
                  brands.length > 0 ?
                    brands.map(brand => {
                      const { id, name } = brand
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{image}</td>
                          <td>
                            <Link to={`/brands/edit/${id}`} className="btn btn-sm btn-info">Edit</Link>
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

export default ListBrands