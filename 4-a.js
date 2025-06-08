//Write a REACT program to print Name, Address and Company of an Employee. 
//When you Click on CHANGE button, the name and address should be changed.

import React, { useState } from 'react';

function EmployeeInfo() {
  const [employee, setEmployee] = useState({
    name: "John Doe",
    address: "123 Main Street",
    company: "TechCorp"
  });

  return (
    <div>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Address:</strong> {employee.address}</p>
      <p><strong>Company:</strong> {employee.company}</p>
      <button onClick={() => setEmployee({ ...employee, name: "Jane Smith", address: "456 Park Avenue" })}>
        CHANGE
      </button>
    </div>
  );
}

export default EmployeeInfo;

//npx create-react-app employee-info
//cd employee-info
//npm start
