"use client"

import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error, setError} = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
    
    if (!name || !email  || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
          name, email, password 
        }),
      });


      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User registration failed.")
      }
    } catch (error) {
      console.log("Error during registration.", error);
    }
  };



  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-12 border-custom-green -mt-4">
        <h1 className="text-xl font-bold my-4">Register an account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
           onChange={(e) => setName(e.target.value)}
            className="w-[400px] border border-gray-200 font-baskerville"
            type="text"
            name="fullName"
            placeholder="Full Name"
           
           
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-[400px] border border-gray-200 font-baskerville"
            type="text"
            name="email"
            placeholder="Email"
            
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-[400px] border border-gray-200 font-baskerville"
            type="password"
            name="password"
            placeholder="Password"
           
          />
          <input
            className="w-[400px] border border-gray-200 font-baskerville"
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            
          />

          <div className="flex items-center justify-end">
            <button className="bg-custom-green text-white font-baskerville px-4 py-2 rounded-lg">
              Register
            </button>
          </div>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
             {setError}
            </div>
          )}

        <Link className="text-sm mt-3 text-right" href="/login">
          Already have an account? <span className="underline">Login</span>
        </Link>
        </form>
      </div>
    </div>
  );
}
