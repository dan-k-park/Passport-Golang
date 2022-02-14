import axios from "axios";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useRouter } from "next/router";

const Login: React.FC<{}> = ({}) => {
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleGuh = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", {
        "username": username.current?.value,
        "password": password.current?.value,
      });
      if (res) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-200 shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log In
        </h1>
        <form onSubmit={handleGuh}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              placeholder="Username"
              className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              ref={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              ref={password}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-green-500 py-2 px-8 text-sm text-white rounded border border-green-400`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
