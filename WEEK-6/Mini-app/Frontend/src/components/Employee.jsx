import {useLocation} from "react-router"

function Employee() {
  //read state recieved in navigation
  const {state}=useLocation();
  
  return (
    <div className="flex flex-col items-center  h-screen">
      <p>Name: {state?.emp?.name}</p>
      <p>Email: {state?.emp?.email}</p>
      <p>Mobile: {state?.emp?.mobile}</p>
      <p>Designation: {state?.emp?.designation}</p>
      <p>Company Name: {state?.emp?.companyName}</p>
    </div>
  )
}

export default Employee
