import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/brands'

const getBrands = async (cb) => {
    try {
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        cb(brands.data)
    } catch (e) {
        console.log(e)
    }
}

const addBrand = async (brand) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + "/create",
            data: brand
        })


        Swal.fire(
            'Brand User',
            'Brand has been added',
            'success'
        )
    } catch (e) {
        console.log(e)
    }
}

const editBrand = async (id, brand) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: brand
        })

        Swal.fire(
            'Edit Brand ' + id,
            'Brand ' + id + ' has been updated',
            'success'
        )
        console.log(result.data)
    } catch (e) {
        console.log(e)
    }
}

const removeBrand = async (id) => {
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

const accountBrand = async (id, cb) => {
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
    getBrands,
    addBrand,
    editBrand,
    removeBrand,
    accountBrand
}