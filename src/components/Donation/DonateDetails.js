import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../redux/actions/actions";
export default function DonateDetails() {
    const currentUser = useSelector(state => state.currentUser);
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const dispatch = useDispatch();

    const update = () => {
        const user = {
            name: userName ? userName : currentUser.name,
            address: userAddress ? userAddress : currentUser.address,
            email: userEmail ? userEmail : currentUser.email
        }
        dispatch(setCurrentUser(user))
        navigate("/")
    }
    return (
        <div style={{ width: '50%', margin: '15%', backgroundColor: '#FAFAFA', borderRadius: 16 }}>
            <div style={{ padding: '5%' }}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" defaultValue={currentUser.name} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">adress</span>
                    <input type="text" className="form-control" defaultValue={currentUser.address} onChange={(e) => setUserAddress(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">email</span>
                    <input type="text" className="form-control" defaultValue={currentUser.email} onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-primary mb-3" onClick={update}>update</button>
                </div>
            </div>
        </div>
    )
}