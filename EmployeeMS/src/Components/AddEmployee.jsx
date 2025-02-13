import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
const AddEmployee = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status){
                setCategory(result.data.Result);
            }else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    })

  return (
    <div className="d-flex justify-content-center align-items-center h-75 ">
    <div className="p-3 rounded w-50 border ">
        <h2>Add Employee</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="name"><strong>Name:</strong></label>
                <input type="text" name='name' autoComplete="off" placeholder="Enter Name"
                   className="form-control rounded-0" />
            </div>
            <div className="mb-3">
                <label htmlFor="email"><strong>Email:</strong></label>
                <input type="email" name='email' autoComplete="off" placeholder="Enter Email"
                    className="form-control rounded-0" />
            </div>
            <div className="mb-3">
                <label htmlFor="password"><strong>Password:</strong></label>
                <input type="password" name='password' autoComplete="off" placeholder="Enter Password"
                     className="form-control rounded-0" />
            </div>
            <div className="mb-3">
                <label htmlFor="salary"><strong>Salary:</strong></label>
                <input type="text" name='salary' autoComplete="off" placeholder="Enter Salary"
                    className="form-control rounded-0" />
            </div>
            <div className="mb-3">
                <label htmlFor="address"><strong>Address:</strong></label>
                <input type="text" name='address' autoComplete="off" placeholder="Enter Address"
                     className="form-control rounded-0" />
            </div>
            <div className="mb-3">
                <label htmlFor="category"><strong>Select Category:</strong></label>
                <select name="category" id="category" className="form-select">
                    {category.map(c => (
                            <option key={c.name}>{c.name}</option>
                            ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="formFile"><strong>Choose a photo:</strong></label>
                <input class="form-control" type="file" id="formFile"/>
            </div>
    
            <button className="btn btn-dark w-100 rounded-0 mb-2">Add Employee</button>
        </form>
    </div>
</div>
  )
}

export default AddEmployee