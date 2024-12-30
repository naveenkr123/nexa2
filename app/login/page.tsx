import Link from "next/link";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="border border-gray-600 rounded w-fit p-4 m-12 mx-auto">
      <form className="flex flex-col gap-3 mb-5">
        <h1 className="text-center text-2xl font-semibold">Login</h1>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="py-1 px-3 rounded bg-black border border-gray-700"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="py-1 px-3 rounded bg-black border border-gray-700"
        />
        <button className="bg-blue-600 p-1 rounded" type="submit">
          Login
        </button>
      </form>
      <Link href={"/register"}>
        <button className="bg-green-600 p-1 rounded w-full">Register</button>
      </Link>
    </div>
  );
};

export default Login;
