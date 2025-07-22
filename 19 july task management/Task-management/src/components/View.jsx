import React from 'react'
import './Styles.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router';
import Updates from './Updates';

const View = () => {

    const [product, setProducts] = useState([]);
    const [del, setDelete] = useState(0);
     const [isEdit, setIsEdit] = useState(false);
      const [id,setId] = useState(null)

    useEffect(() => {
        async function getData() {
            let res = await axios.get("http://localhost:3000/tasks");
            console.log(res.data);
            setProducts(res.data);
        }
        getData();
    }, [del,isEdit]);

   async function handleDelete(ind){
      let res =   await axios.delete(`http://localhost:3000/tasks/${ind}`)
      console.log("deleted", res)
      setDelete(del+1);
   }

   function update(id){
    setId(id)
    setIsEdit(true);
   }
   

    return (
        <div>
            {
                isEdit ? (
                    <Updates id={id} setEdit={setIsEdit} />
                ): (
                    <>
            <main>
                <h2>Task List</h2>
                <table>
                    <thead>
                        <tr><th>Title</th><th>Description</th><th>Due</th><th>Actions</th></tr>
                    </thead>
                    <tbody>

                        {
                            product.map((prod, ind) => {
                                return (
                                    <tr>
                                        <td>{prod.taskTitle}</td>
                                        <td>{prod.taskDescription}</td>
                                        <td>{prod.dueDate}</td>
                                        <td style={{display:'flex' , justifyContent:'space-evenly', flexDirection:'column'}}>
                                            <Link onClick={()=> update(prod.id)} >Edit</Link> 
                                            <Link  onClick={()=>handleDelete(prod.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </main>
            <Outlet/>
        </>
                )
            }
        </div>
    )
}

export default View