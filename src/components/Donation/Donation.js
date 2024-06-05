import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { setNewDonations } from "../../redux/actions/actions";
export default function Donation() {
    let userName = useSelector(state=> state.currentUser).name
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addDonation = () => {
        const donation = {
            name: userName,
            amount: amount
        }
        dispatch(setNewDonations(donation))
        navigate("/")
    }

    return (
        <form style={{ margin: "10%" }} className="row g-3">
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">name</label>
                <input type="text" defaultValue={userName} className="form-control"></input>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">amount</label>
                <input type="number" className="form-control" onChange={(e) => setAmount(e.target.value)}></input>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">credit card</label>
                <input type="text" placeholder="enter yor credit card" className="form-control"></input>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">validity date</label>
                <input type="date" className="form-control"></input>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">3 back digits</label>
                <input type="text" placeholder="enter 3 digits" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary mb-3" onClick={addDonation}>send</button>
        </form>
    )
}