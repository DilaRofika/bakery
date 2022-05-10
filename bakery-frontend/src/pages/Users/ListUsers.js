import React, { useState, useEffect } from 'react'
import { getUsers, removeUser } from '../../axios/userAxios'
import LoadingBar from '../../helpers/LoadingBar'
import {
  Link, useNavigate
} from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

const ListUsers = () => {
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // callback untuk mengambil data users dari folder axios
    getUsers(result => setUsers(result))
  }, [])

  const deleteHandler = (id) => {
    removeUser(id)
    navigate('/users')
  }

  return (
    <>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link to="/users/create" className="btn btn-sm btn-primary my-2">
              <span className="me-2">
                <FiPlus></FiPlus>
              </span>
              Add User
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-borderd">
              <thead>
                <tr className="table-primary">
                  <th>Id</th>
                  <th>Name</th>
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
                          <td>
                            <Link to={`/users/edit/${id}`} className="btn btn-sm btn-info">Edit</Link>
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

export default ListUsers