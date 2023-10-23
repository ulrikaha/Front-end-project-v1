import Link from "next/link";


export default function LoginForm() {

    return <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-5 rounded-lg border-t-12 border-custom-green -mt-4">
<h1 className="text-xl font-bold my-4">Login</h1>

<form className="flex flex-col gap-3">
    <input className="w-[400px] border border-gray-200 font-baskerville" type="text" placeholder="Email" />
    <input className="w-[400px] border border-gray-200 font-baskerville" type="password" placeholder="Password" />
    <div className="flex items-center justify-end">
<button className="bg-custom-green text-white font-baskerville rounded-md px-6 py-2">
    Login
    </button>
    </div>

<div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
    Error message
</div>

<Link className="text-sm mt-3 text-right" href={"/register"}>
    Don't have an account? <span className="underline">Register</span>
</Link>
        </form>
    </div>
</div>
}