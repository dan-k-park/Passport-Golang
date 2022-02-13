import React, { useRef } from "react";

const Login: React.FC<{}> = ({}) => {
  const username = useRef();
  const password = useRef();

  const handleGuh = (e: any) => {
    e.preventDefault();
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
              id="username"
              placeholder="Username"
              className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
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
