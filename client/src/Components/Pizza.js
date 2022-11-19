import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

export default function Pizza({pizza}){
    const [quantity,setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{margin:"70px"}} className="shadow-lg p-3 mb-5 bg-white rounded">
           <div onClick={handleShow}>
               <h1>{pizza.name}</h1>
               <img src={pizza.image} className="img-fluid" style={{height:"200px",width:"200px"}} />
              </div>
            <div className="flex-container">

                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select value={varient}
                    className="form-control"
                    onChange={(e)=>setVarient(e.target.value)}
                    >
                        {pizza.varients.map(varient=>{
                            return <option   value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select
                    className="form-control"
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}
                    >
                        {[...Array(10).keys()].map((x,i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
   <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className="mt-1">Price : {pizza.prices[0][varient]*quantity} DHs</h1>
                </div>
                <div className="m-1 w-100">
                    <Button className="btn">ADD TO CART</Button>
                </div>
       <div>

       </div>
            </div>
             <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img src={pizza.image} className="img-fluid" style={{height:"400px"}}/>
                   <p> {pizza.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}