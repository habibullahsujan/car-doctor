import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import Order from "./Order";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:5000/confirmOrder?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, [user?.email]);
const clickToDeleteOrder=(id)=>{
  console.log('i am clicked');
  const afterDelete=orders.filter(order=> order._id !==id);
  setOrders(afterDelete)
}
const handleStatusUpdate=(id)=>{
  fetch(`http://localhost:5000/confirmOrder/${id}`,{
    method:'PATCH',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({status:'Approved'})
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.modifiedCount){
      const remaining=orders.filter(match=>match._id !== id);
      const approved=orders.find(match=>match._id === id);
      approved.status='Approved'
      const allOrders=[approved, ...remaining];
      setOrders(allOrders)
    }
  })

}
  return <div className="my-24">
    {
        orders.map(order=><Order order={order} key={order._id} clickToDeleteOrder={clickToDeleteOrder} handleStatusUpdate={handleStatusUpdate}/>)
    }
  </div>;
};

export default Orders;
