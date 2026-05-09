import {useState, useEffect} from "react";
import {useNavigate} from "react-router";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const goToEmployee=(empObj)=>{
    //navigate to employee component
    navigate("/employee", { state: { emp: empObj } });
  }
  const goToEditEmployee=(empObj)=>{
    navigate("/edit-emp", { state: { emp: empObj } });
  }

  const deleteEmpById = async (id) => {
    //make http delete request
    let res = await axios.delete(`http://localhost:4000/emp-api/employee/${id}`);
    if (res.status === 200) {
      getEmps();
    }
  }

  async function getEmps() {
      const res = await axios.get("http://localhost:4000/emp-api/employee");
      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payload);
      }
    }
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className="  border-2  gap-10 p-5 border-gray-400 rounded-2xl text-center">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 buttons */}
            <div className="flex justify-around">
              <button onClick={() => goToEmployee(empObj)} className="bg-green-500 text-white p-2 rounded-2xl" >View</button>
              <button  onClick={() => goToEditEmployee(empObj)} className="bg-blue-500 text-white p-2 rounded-2xl">Edit</button>
              <button onClick={() => deleteEmpById(empObj._id)} className="bg-red-500 text-white p-2 rounded-2xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;