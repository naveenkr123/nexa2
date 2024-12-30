import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <div className="mx-auto mt-12 gap-6">
        <h1 className="text-center text-5xl font-bold mb-4">Welcome</h1>
        <Link href={`/login`}>
          <button className="bg-blue-600 py-2 px-6 rounded-full font-medium me-4">
            Login
          </button>
        </Link>
        <Link href={`/register`}>
          <button className="bg-green-600 py-2 px-6 rounded-full font-medium">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
