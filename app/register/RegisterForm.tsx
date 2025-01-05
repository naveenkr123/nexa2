import Link from "next/link";
import React, { FormEvent } from "react";

type Props = {};

const RegisterForm = (props: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    console.log(response);
  };
  return (
    <div className="border border-gray-600 rounded w-fit p-4 m-12 mx-auto">
      <form className="flex flex-col gap-3 mb-5" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-semibold">Register</h1>
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
        <button className="bg-green-600 p-1 rounded" type="submit">
          Register
        </button>
      </form>
      <Link href={"/login"}>
        <button className="bg-blue-600 p-1 rounded w-full">Login</button>
      </Link>
    </div>
  );
};

export default RegisterForm;
