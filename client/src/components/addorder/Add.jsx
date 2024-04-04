import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const orders = {
    date:"",
    testData:"",
    product:"",
    n:"",
    feature:"",
    sharedTo:"",
    sharedBy:""
  }

  const [order, setOrder] = useState(orders);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setOrder({...order, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("https://order-sheet-9m6c.onrender.com/api/create", order)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addOrder'>
        <Link to={"/"}>Back</Link>
        <h3>Add new Order</h3>
        <form className='addOrderForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="date">Date</label>
                <input type="date" onChange={inputHandler} id="date" name="date" autoComplete='off' placeholder='Date' />
            </div>
            <div className="inputGroup">
                <input type="text" onChange={inputHandler} id="testData" name="testData" autoComplete='off' placeholder='Enter your test data here' />
            </div>
            <div className="inputGroup">
                <input type="text" onChange={inputHandler} id="product" name="product" autoComplete='off' placeholder='Product Type' />
            </div>
            <div className="inputGroup">
                <input type="text" onChange={inputHandler} id="n" name="n" autoComplete='off' placeholder='No. of orders' />
            </div>
            <div className="inputGroup">
                <input type="text" onChange={inputHandler} id="feature" name="feature" autoComplete='off' placeholder='Feature Id' />
            </div>
            <div className="inputGroup">
                <input type="text" onChange={inputHandler} id="sharedTo" name="sharedTo" autoComplete='off' placeholder='Order shared to' />
            </div>
            <div className="inputGroup">
                <input type="text" onChange={inputHandler} id="sharedBy" name="sharedBy" autoComplete='off' placeholder='Order shared by' />
            </div>
            <div className="inputGroup">
                <button type="submit">ADD Order</button>
            </div>
        </form>
    </div>
  )
}

export default Add