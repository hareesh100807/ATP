/**
 * Form1.jsx
 * ----------
 * A React form component using react-hook-form for user registration.
 * Implements form validation (required fields, whitespace check) and
 * displays submitted users in a table below the form.
 *
 * Concepts: react-hook-form, useState, Form validation, JSX, Tailwind CSS
 */

import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Form() {
    // ─── react-hook-form Setup ───────────────────────────────
    const {
        register,                   // Register form fields for validation
        handleSubmit,               // Wrapper for form submission handler
        formState: { errors }       // Access validation error messages
    } = useForm();

    // ─── State: List of submitted users ──────────────────────
    const [users, setUsers] = useState([]);

    /**
     * Handler called on valid form submission.
     * Pushes the new user object into the users array.
     * @param {Object} obj - Form data { username, email, dateOfBirth }
     */
    const onformSubmit = (obj) => {
        users.push(obj);
        setUsers([...users]); // Trigger re-render with spread copy
    };

    return (
        <div className="w-full mx-auto  border p-8  bg-blue-400">

            {/* ─── User Registration Form ─────────────────────── */}
            <div className="w-100 mx-auto mt-16 border p-8 rounded-lg shadow-lg bg-orange-300">
                <h1 className=" text-center text-5xl">Create User Form</h1>
                <form className=" max-w-md m-auto" onSubmit={handleSubmit(onformSubmit)}>

                    {/* Username Field */}
                    <div className="mb-3">
                        <label htmlFor="username">firstName</label>
                        <input type="text" {...register("username", {
                            required: "Username is required",
                            validate: (v) => v.trim().length != 0 || "Whitespace not allowed",
                        })}
                            id="username" className="border w-full m-auto" />
                        {/* Validation error messages */}
                        {errors.username?.type == 'required' && <p className="text-red-500">Username required</p>}
                        {errors.username?.type == 'validate' && <p className="text-red-500">Whitespace not allowed</p>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email",
                            { required: "Email is required" }
                        )} id="email" className="border w-full" />
                        {errors.email?.type == 'required' && <p className="text-red-500">Email required</p>}
                    </div>

                    {/* Date of Birth Field */}
                    <div>
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <input type="date" {...register("dateOfBirth",
                            { required: "Date of Birth is required" }
                        )} id="dob" className="border w-full" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="border-2 block m-auto mt-3 bg-pink-200">Add User</button>
                </form>
            </div>

            {/* ─── Users Table ────────────────────────────────── */}
            <div className="border w-200 bg-red-400 mt-8 p-4 align-middle">
                <h3 className="text-4xl text-center">List Of Users</h3>
                <table className=" w-full m-auto mt-3 p-10">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>Email</th>
                            <th>Date Of Birth</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {/* Map over submitted users and render each row */}
                        {users.map((user, index) => (
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
    );
}

export default Form;
