import {useForm} from 'react-hook-form'
import {useState} from 'react';

function Form() {
    const {register,//to register form fields
        handleSubmit,//to handle form submission
        formState:{errors}//to handle form validations
    }=useForm();
    const [users,setUsers]=useState([]);
    const onformSubmit=(obj)=>{
        users.push(obj);
        setUsers([...users]);
    }
  return (
  // Create user form
  <div className="w-full mx-auto  border p-8  bg-blue-400">
    <div className="w-100 mx-auto mt-16 border p-8 rounded-lg shadow-lg bg-orange-300">
      <h1 className=" text-center text-5xl">Create User Form</h1>
      <form className=" max-w-md m-auto" onSubmit={handleSubmit(onformSubmit)}>
        <div className="mb-3">
        {/* Username */}
            <label htmlFor="username">firstName</label>
            <input type="text" {...register("username",{
                            required:"Username is required",
                            validate:(v)=> v.trim().length!=0 || "Whitespace not allowed",
                            })}
                    id="username" className="border w-full m-auto" />
        {/* Validation error */}
        {errors.username?.type=='required'&&<p className="text-red-500">Username required</p>}
        {errors.username?.type=='validate' && <p className="text-red-500">Whitespace not allowed</p>}
        </div>
        {/* Email */}
        <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email",
                            {required:"Email is required",
                            }
            )} id="email" className="border w-full" />
            {errors.email?.type=='required' && <p className="text-red-500">Email required</p>}
        </div>
        <div>
            <label htmlFor="dateOfBirt">Date Of Birth</label>
            <input type="date" {...register("dateOfBirth",
                            {required:"Date of Birth is required",
                            }
            )} id="dob" className="border w-full" />
        </div>
        <button type="submit" className="border-2 block m-auto mt-3 bg-pink-200">Add User</button>
      </form>
      </div>   

    {/* Table to display the list of users */}
    <div className="border w-200 bg-red-400 mt-8 p-4 align-middle">
      <h3 className="text-4xl text-center">List Of users</h3>
      <table className=" w-full m-auto mt-3 p-10">
      <thead>
        <tr>
          <th>FirstName</th>
          <th>Email</th>
          <th>Date Of Birth</th>
        </tr>
      </thead>
        <tbody  className="text-center">
        {
        users.map((user,index)=>(
            <tr key={index}>
                <td>{user.username}</td>  
                <td>{user.email}</td>
                <td>{user.dateOfBirth}</td>
            </tr>
            
        ))}
        </tbody>
      </table> 
      </div>     
  </div>

  )
}

export default Form
