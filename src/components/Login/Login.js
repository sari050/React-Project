import React, { useContext, useState } from "react";
import axios from "axios";

import { UserCtx } from "../UserContext";
import { MANAGER_NAME } from "../../Constans";
import { useDispatch } from "react-redux";
import { setCurrentUser, setDonations, setIsManagar, setProducts } from "../../redux/actions/actions";

export default function Login(props) {
    const userCtx = useContext(UserCtx);
    const setUserName = userCtx.setUserName;
    const userName = userCtx.userName;
    const [userPassword, setUserPassword] = useState("");
    const dispatch = useDispatch()
    const { setIsLogin } = props;

    const next = () => {
        if (userName && userPassword) {
            axios.get(`http://localhost:4000/user/getUserByName/${userName}`)
                .then(data => {
                    if (!data || data.data.password !== userPassword) {
                        axios.post('http://localhost:4000/user/addUser', { username: userName, password: userPassword, address: null, email: null })
                            .then(succ => console.log("name", succ.data.username))

                    }
                    setIsLogin(true)
                    localStorage.setItem("currentUser", userName)
                    const user = {
                        name: userName,
                        adress: data?.data?.address,
                        email: data?.data?.email
                    }
                    dispatch(setCurrentUser(user))
                }
                )
            if (userName === MANAGER_NAME) {
                dispatch(setIsManagar(true))
            }
            axios.get('./products.json')
                .then(
                    data => {
                        dispatch(setProducts(data?.data))
                    }
                )
                .catch(
                    error => console.log('error', error)
                )

            axios.get('./donations.json')
                .then(
                    data => {
                        dispatch(setDonations(data?.data))
                    }
                )
                .catch(
                    error => console.log('error', error)
                )
        }
    }
    return (
        <div style={{ width: '50%', margin: '15%', backgroundColor: '#FAFAFA', borderRadius: 16 }}>
            <div style={{ padding: '5%' }}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="user name" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="password" onChange={(e) => setUserPassword(e.target.value)} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-primary mb-3" onClick={next}>login</button>
                </div>
            </div>
        </div>
    )
}