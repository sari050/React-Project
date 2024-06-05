import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ProductCard(props) {

    const navigate = useNavigate()
    const { product } = props

    const goToProductDetails = () => {
        navigate(`/ProductDetails/${product?.name}/${product?.description}/${product?.price}/${product.image}`)
    }
    return (
        <div className="card" style={{ width: "200px", height: "400px", backgroundColor: '#FAFAFA', marginTop: '5%', marginLeft: '5%', borderRadius: 16, borderWidth: 3, borderColor: 'black' }}>
            <img src={require(`../../assets/${product.image}`)} className="card-img-top" />
            <div className="card-body">
                <h4>{product?.name}</h4>
                <p className="card-text">{product?.description}</p>
                <p>price: {product?.price}</p>
                <button className="btn btn-primary" onClick={() => goToProductDetails()}>Buy</button>
            </div>
        </div>


    )
}