import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { setNewProduct, setUpdateProduct } from "../../redux/actions/actions";

export default function PruductTable() {

    const dispatch=useDispatch()

    const [visibleModal, setVisibleModal] = useState(false)
    const [visibleEditModal, setVisibleEditModal] = useState(false)
    const [currentRow, setCurrentRow]= useState({})
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
   

    const products = useSelector(state => state.products)

    const handleShow = () => {
        setVisibleModal(true)
    }
    const handleClose = () =>{
        setVisibleModal(false)
    }

    const handleSave = () => {
        const product={
            key: products.length+1,
            name:productName,
            description:productDescription,
            price:productPrice,
            image:"star.jpeg"
        }
        dispatch(setNewProduct(product))
        setVisibleModal(false)
    }

    const handleEdit = (currentRow) => {
        setVisibleEditModal(true)
        setCurrentRow(currentRow)
    }

    const handleUpdateProduct = () => {
        const product={
            key: currentRow.key,
            name:productName || currentRow.name,
            description:productDescription || currentRow.description,
            price:productPrice || currentRow.price,
            image:currentRow.image
        }
        dispatch(setUpdateProduct(product))
        setVisibleEditModal(false)
    }

    const renderModalContent = () =>
    <div style={{display: 'flex'}}>
            <div>
                <labal>name</labal><br/>
                <labal>description</labal><br/>
                <labal>price</labal>
            </div>
            <div>
                <input type="text" onChange={(e)=>setProductName(e.target.value)}/><br/>
                <input type="text" onChange={(e)=>setProductDescription(e.target.value)}/><br/>
                <input type="number" onChange={(e)=>setProductPrice(e.target.value)}/>
                </div>
            </div>

    const renderEditModalContent = () =>
        <div style={{display: 'flex'}}>
        <div>
            <labal>name</labal><br/>
            <labal>description</labal><br/>
            <labal>price</labal>
        </div>
        <div>
            <input type="text" defaultValue={currentRow?.name} onChange={(e)=>setProductName(e.target.value)}/><br/>
            <input type="text" defaultValue={currentRow?.description} onChange={(e)=>setProductDescription(e.target.value)}/><br/>
            <input type="number" defaultValue={currentRow?.price} onChange={(e)=>setProductPrice(e.target.value)}/>
            </div>
        </div>

    return (
        <>
            <div style={{display: 'flex', justifyContent:'flex-end', marginTop: '2%', marginBottom: '2%'}}><button className="btn btn-primary" onClick={handleShow}>add product</button></div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right"><img src={require(`../../assets/${row.image}`)} width="40px" height="40px" /></TableCell>
                                <TableCell align="right"><button className="btn btn-primary" onClick={() => handleEdit(row)}>Edit</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal show={visibleModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>{renderModalContent()}</Modal.Body>
                <Modal.Footer>
                <button className="btn btn-default" onClick={handleClose}>
                    Close
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                    Save Changes
                </button>
                </Modal.Footer>
            </Modal>
  

            <Modal show={visibleEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>{renderEditModalContent()}</Modal.Body>
                <Modal.Footer>
                <button className="btn btn-default" onClick={() => setVisibleEditModal(false)}>
                    Close
                </button>
                <button className="btn btn-primary" onClick={handleUpdateProduct}>
                    Save Changes
                </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}