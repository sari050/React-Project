import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

export default function ProductsContext() {

    const dispatch = useDispatch()

    useEffect(() => {
               axios.get('../../public/products.json')
            .then(
                data => {dispatch(setProducts(data?.data))
                console.log('data?.data', data?.data)}
            )
            .catch(
                error=>console.log('error', error)
                )
    }, [])
}