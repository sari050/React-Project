import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Donation from "../components/Donation/Donation";
import DonationArr from "../components/Donation/DonationArr";
import ProductDetails from "../components/Products/ProductDetails";
import Products from "../components/Products/Products";
import PruductTable from "../components/Products/ProductTable";
import DonateDetails from "../components/Donation/DonateDetails";

export default function MyRoute(props) {
    const { setIsLogin } = props
    const isManager = useSelector(state => state.isManager)
    console.log('manager', isManager)
    const logout = () => {
        localStorage.removeItem("currentUser")
        setIsLogin(false)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light" >
                <Link to="/" style={{ color: "black" }} className="navbar-brand">Products</Link><br />
                <Link to="/donation" style={{ color: "black" }} className="navbar-brand">Donation</Link><br />
                <Link to="/donateDetails" style={{ color: "black" }} className="navbar-brand">Donate-details</Link><br />
                {isManager && <>
                    <Link to="/tableProducts" style={{ color: "black" }} className="navbar-brand">Product-Table</Link>
                    <Link to="/donationArr" style={{ color: "black" }} className="navbar-brand" > Donations Arr</Link></>
                }
                <button onClick={logout} >Log-Out</button>
            </nav>
            
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/donation' element={<Donation />} />
                <Route path='/donateDetails' element={<DonateDetails />} />
                <Route path="/productDetails" element={<ProductDetails />} />
                <Route path="/tableProducts" element={<PruductTable />} />
                <Route path="/ProductDetails/:name/:description/:price/:image" element={<ProductDetails/>}/>
                <Route path="/donationArr" element={<DonationArr />}></Route>
            </Routes>
        </div>
    )

}