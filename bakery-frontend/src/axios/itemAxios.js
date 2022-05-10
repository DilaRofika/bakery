import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/items'

const getItems = async (cb) => {
    try {
        let items = await axios({
            method: 'GET',
            url: URL
        })
        cb(items.data)
    } catch (e) {
        console.log(e)
    }
}

const addItem = async (item) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + "/create",
            data: item
        })


        Swal.fire(
            'Add Item',
            'Item has been added',
            'success'
        )
    } catch (e) {
        console.log(e)
    }
}

const editItem = async (id, item) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: item
        })

        Swal.fire(
            'Edit Item ' + id,
            'Item ' + id + ' has been updated',
            'success'
        )
        console.log(result.data)
    } catch (e) {
        console.log(e)
    }
}

const removeItem = async (id) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: "DELETE",
                    url: URL + '/delete/' + id
                })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    } catch (e) {
        console.log(e)
    }
}

const accountItem = async (id, cb) => {
    try {
        let result = await axios({
            method: "GET",
            url: URL + '/information/' + id
        })

        cb(result.data)
    } catch (e) {
        console.log(e)
    }
}

export {
    getItems,
    addItem,
    editItem,
    removeItem,
    accountItem
}