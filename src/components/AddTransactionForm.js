import React, { useEffect, useState } from "react";
const baseUrl="http://localhost:8001/transactions"
 function AddTransactionForm() {
  const [date,setDate]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState("")
  const [amount,setAmount]=useState("")
  useEffect(()=>{ 
    console.log(date,description,category,amount)
  },[date])
  let dataObject={
    date:date,
    description:description,
    category:category,
    amount:amount
  }
const submitData=async(event)=>{
  event.preventDefault()
   let res=await fetch("http://localhost:8001/transactions",{
    method:'POST',
    headers:{
      'Content-Type':"application/json"

    },
    body:JSON.stringify(dataObject)
  })
  let data = await res.json()
  window.location.reload()
}
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitData}>
        <div className="inline fields">
          <input type="date" name="date" onChange={(e)=>{setDate(e.target.value)}} />
          <input type="text" name="description" placeholder="Description"onChange={(e)=>{setDescription(e.target.value)}} />
          <input type="text" name="category" placeholder="Category" onChange={(e)=>{setCategory(e.target.value)}}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={(e)=>{setAmount(e.target.value)}}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
