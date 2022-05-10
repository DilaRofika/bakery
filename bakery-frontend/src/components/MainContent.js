import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import { HomePage } from '../pages'
//import { Users, ListUsers, CreateUser, EditUser } from '../pages'
//import { Brands, ListBrands, CreateBrand, EditBrand } from '../pages'
//import { Items, ListItems, CreateItem, EditItem } from '../pages'
import {
    HomePage,
    Users, ListUsers, CreateUser, EditUser,
    Brands, ListBrands, CreateBrand, EditBrand,
    Items, ListItems, CreateItem, EditItem
} from '../pages'

const MainContent = () => {
    return (
        <div className="container p-3">
            {/* <h3>Dashboard Bakery</h3> */}

            <Routes>
                <Route path="" element={
                    <HomePage></HomePage>
                }></Route>
                <Route path="Users" element={<Users></Users>}>
                    <Route path="" element={<ListUsers></ListUsers>}></Route>
                    <Route path="create" element={<CreateUser></CreateUser>}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditUser></EditUser>}></Route>
                    </Route>
                </Route>
                <Route path="Brands" element={<Brands></Brands>}>
                    <Route path="" element={<ListBrands></ListBrands>}></Route>
                    <Route path="create" element={<CreateBrand></CreateBrand>}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditBrand></EditBrand>}></Route>
                    </Route>
                </Route>
                <Route path="Items" element={<Items></Items>}>
                    <Route path="" element={<ListItems></ListItems>}></Route>
                    <Route path="create" element={<CreateItem></CreateItem>}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditItem></EditItem>}></Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default MainContent