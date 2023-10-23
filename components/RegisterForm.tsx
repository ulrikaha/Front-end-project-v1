"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    
    if (!name || !email  || !password) {
      setError("Please fill in all fields");
      return;
    }

   

    try {
    const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
          });

          const { user } = await resUserExists.json();

          if (user) {
            setError("User already exists");
            return;
          }

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
        const form = e.target as HTMLFormElement;
        form.reset();
        //Redirect to login page
        router.push("/login");

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

          <div className="flex items-center justify-end">
            <button className="bg-custom-green text-white font-baskerville px-4 py-2 rounded-lg">
              Register
            </button>
          </div>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}