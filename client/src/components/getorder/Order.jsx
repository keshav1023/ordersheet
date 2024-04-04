import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./order.css";
import { Link } from 'react-router-dom'

const Order = () => {

  const [orders, setOrders] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:8000/api/getall");
        setOrders(response.data);
    }

    fetchData();

  },[])

  const deleteOrder = async(orderId) =>{
      await axios.delete(`http://localhost:8000/api/delete/${orderId}`)
      .then((respones)=>{
        setOrders((prevOrder)=> prevOrder.filter((order)=> order._id !== orderId))
        toast.success(respones.data.msg, {position: 'top-right'})
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='orderTable'>
        <Link to={"/add"} className='addButton'>Add Order</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Test Data</th>
                    <th>Product</th>
                    <th>N</th>
                    <th>Feature#</th>
                    <th>Shared To</th>
                    <th>Shared By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index)=>{
                        return(
                        <tr key={order._id}>
                            <td>{order.date}</td>
                            <td>{order.testData}</td>
                            <td>{order.product}</td>
                            <td>{order.n}</td>
                            <td>{order.feature}</td>
                            <td>{order.sharedTo}</td>
                            <td>{order.sharedBy}</td>
                            <td className='actionButtons'>
                                <button onClick={()=> deleteOrder(order._id)}><i className="fa-solid fa-trash "></i></button>
                                <Link to={`/edit/`+order._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default Order