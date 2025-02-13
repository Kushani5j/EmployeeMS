import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
    return (
      <div className='px-5 mt-5'>
          <div className='d-flex justify-content-center'>
              <h3>Employee List</h3>
          </div>
          <Link to="/dashboard/add_employee" className='btn btn-success'>Add Employee</Link>
  
          <div className='mt-3'>
              <table className='table'>
                  <thead>
                      <tr>
                          <th>Name</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          
                      }
                  </tbody>
              </table>
          </div>
      </div>
    )
}

export default Employee