import axios from "axios";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/actions";
import ProductCard from "./ProductCard";
import PruductTable from "./ProductTable";

export default function Products() {

    const products = useSelector(state => state.products)
    const isManager=useSelector(state=>state.isManager)

    return (
        <div style={{display: 'flex',flexWrap: "wrap"}}>
            {products.map((item,index)=>{
                return <ProductCard product={item} key={index}/>
            })}
        </div>
    )
}