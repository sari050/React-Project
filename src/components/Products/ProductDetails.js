import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { setNewDonations } from "../../redux/actions/actions";
import { UserCtx } from "../UserContext";

export default function ProductDetails() {
    const { name, description, price, image } = useParams()
    const [visibleModal, setVisibleModal] = useState(false)
    const [countCards, setCountCards] = useState(0)
    // const product = { name: "car", description: "red and nice car", price: "50", image: "car.jpeg" }
    const x = countCards * price;
    const userContext = useContext(UserCtx)
    const userName = userContext.userName
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClose = () => {
        setVisibleModal(false)
    }
    const showModal = () => {
        setVisibleModal(true)
    }
    const renderModalContent = () =>
        <div>
            <h3>name: {name}</h3>
            <input type="text" placeholder="creditCard"/>
            <h5>price: {price}$</h5>
            <p>number of cards: </p>
            <input type="number" onChange={(e) => setCountCards(e.target.value)} />
            <p>total amount {x}</p>
        </div>

    const handleSave = () => {
        const donation = {
            name: userName,
            amount: x
        }
        dispatch(setNewDonations(donation))
        setVisibleModal(false)
        navigate("/products")
    }
    return (
        <>
            <div style={{ backgroundColor: '#FAFAFA', borderRadius: 16, margin: '15%' }}>
                <div style={{ width: '70%', height: '6000', display: 'flex', flexWrap: 'wrap', padding: '5%' }}>
                    <div style={{ flex: 1 }}>
                        <img src={require(`../../assets/${image}`)} width='400' height='300' />
                    </div>
                    <div style={{ flex: 1, paddingLeft: '10%' }}>
                        <h1 style={{ color: 'red' }}>{name}</h1>
                        <h5>{description}</h5>
                        <h6>{price}</h6>
                        <button className="btn btn-primary" onClick={showModal} >buy</button>
                    </div>
                </div>
            </div>

            <Modal show={visibleModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>buy Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>{renderModalContent()}</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-default" onClick={handleClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={handleSave}>
                        buy
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}