//Write a REACT program to print Name, Address and Company of an Employee. 
//When you Click on CHANGE button, the name and address should be changed.

import react, {useState} from "react";

function EmployeeInfo(){
  const [employee, setEmployee]= useState({
    name: "Pratyush Pai",
    address:"MSRIT Gate 10",
    company:"CSE"
  });

return(
  <h3>Name: {employee.name}<br/>
  Address: {employee.address}<br/>
  Company: {employee.company}<br></br>
  <button onClick={() => setEmployee({
    ...employee, name:"Percy", address:"MSR North City", company:"AIML"})}>
    CHANGE
  </button>
  </h3>
);
}

export default EmployeeInfo;


//npx create-react-app employee-info
//cd employee-info
//npm start
