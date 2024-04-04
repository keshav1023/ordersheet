import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../addorder/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

 const orders = {
    date:"",
    testData:"",
    product:"",
    n:"",
    feature:"",
    sharedTo:"",
    sharedBy:""
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [order, setUser] = useState(orders);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...order, [name]:value});
    console.log(order);
 }

 useEffect(()=>{
    axios.get(`https://order-sheet-9m6c.onrender.com/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`https://order-sheet-9m6c.onrender.com/api/update/${id}`, order)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className='addOrder'>
        <Link to={"/"}>Back</Link>
        <h3>Update order</h3>
        <form className='addOrderForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="date">Date</label>
                <input type="date" value={order.date} onChange={inputChangeHandler} id="date" name="date" autoComplete='off' placeholder='Date' />
            </div>
            <div className="inputGroup">
                <input type="text" value={order.testData} onChange={inputChangeHandler} id="testData" name="testData" autoComplete='off' placeholder='Test Data' />
            </div>
            <div className="inputGroup">
                <input type="text" value={order.product} onChange={inputChangeHandler} id="product" name="product" autoComplete='off' placeholder='Product Type' />
            </div>
            <div className="inputGroup">
                <input type="text" value={order.n} onChange={inputChangeHandler} id="n" name="n" autoComplete='off' placeholder='No. of Orders' />
            </div>
            <div className="inputGroup">
                <input type="text" value={order.feature} onChange={inputChangeHandler} id="feature" name="feature" autoComplete='off' placeholder='Feature #' />
            </div>
            <div className="inputGroup">
                <input type="text" value={order.sharedTo} onChange={inputChangeHandler} id="sharedTo" name="sharedTo" autoComplete='off' placeholder='Order shared to' />
            </div>
            <div className="inputGroup">
                <input type="text" value={order.sharedBy} onChange={inputChangeHandler} id="sharedBy" name="sharedBy" autoComplete='off' placeholder='Order shared by' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE ORDER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit