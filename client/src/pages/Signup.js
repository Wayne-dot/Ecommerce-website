import { useState } from "react";
import { useSingup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const {signup, isloading, error} = useSingup()

    const handleSubmit = async(e) => {
        e.preventDefault();

        await signup(email, password)
    }

    return (
        // <form className="signup" onSubmit={handleSubmit}>
        //     <h3>Signup</h3>
        //     <label>Email:</label>
        //     <input 
        //         type="email"
        //         onChange={(e) => setEmail(e.target.value)}
        //         value = {email}
        //     />
        //     <label>Password:</label>
        //     <input 
        //         type="password"
        //         onChange={(e) => setpassword(e.target.value)}
        //         value = {password}
        //     />

        //     <button disabled={isloading}>Signup</button>
        //     {error && <div className="error">{error}</div>}
        // </form>
        <div class="py-16">
            <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl mt-8">
                <div class="w-full p-8">
                    <p class="text-xl text-gray-600 text-center">Create Your Account</p>
                    <div className="w-full p-4 flex">
                        <button className="w-1/4 flex justify-center items-center">
                            <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{ display: 'block' }}
                            className="h-8 w-1/4"
                            >
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            />
                            <path fill="none" d="M0 0h48v48H0z" />
                            </svg>
                        </button>

                        <button className="w-1/4 flex justify-center items-center">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="h-9 w-full"
                            >
                            <path fill="#3b5998" d="M24 1C11.31 1 1 11.31 1 24c0 11.05 7.95 20.19 18.37 22.46v-15.9h-5.51v-6.56h5.51v-5.16c0-5.45 3.25-8.43 8.22-8.43 2.38 0 4.87.42 4.87.42v5.34h-2.74c-2.7 0-3.54 1.67-3.54 3.38v4.45h6l-.97 6.56h-5.03v15.9C38.05 44.19 46 35.05 46 24 46 11.31 35.69 1 24 1z"/>
                        </svg>
                        </button>

                        <button className="w-1/4 flex justify-center items-center">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="h-8 w-full"
                            >
                            <path
                                fill="#1DA1F2"
                                d="M47.61 10.44c-1.67.74-3.48 1.24-5.38 1.46 1.93-1.15 3.43-2.96 4.14-5.13-1.79 1.06-3.81 1.83-5.94 2.25-1.71-1.81-4.13-2.94-6.81-2.94-5.14 0-9.3 4.16-9.3 9.3 0 .73.08 1.45.24 2.13-7.72-.39-14.57-4.08-19.14-9.69-.81 1.37-1.27 2.97-1.27 4.68 0 3.24 1.65 6.1 4.14 7.76-1.53-.05-2.97-.47-4.24-1.17v.12c0 4.53 3.22 8.3 7.52 9.14-.78.21-1.63.32-2.5.32-.61 0-1.2-.06-1.77-.17 1.19 3.69 4.66 6.38 8.75 6.46-3.2 2.5-7.23 4-11.61 4-.75 0-1.51-.04-2.24-.13 4.15 2.65 9.07 4.2 14.35 4.2 17.2 0 26.55-14.24 26.55-26.55 0-.41-.01-.81-.03-1.21 1.82-1.32 3.4-2.97 4.65-4.86z"
                            />
                        </svg>
                        </button>

                        <button className="w-1/4 flex justify-center items-center">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="h-8 w-full"
                            >
                            <path
                                fill="#000000"
                                d="M39.16 28.37c-.47-3.65 1.37-6.53 4.34-8.28-1.66-2.33-4.19-3.59-7.09-3.59-2.95 0-5.17 1.61-6.95 1.61-1.82 0-4.5-1.56-7.4-1.56-5.76 0-11.51 4.59-11.51 12.93 0 2.67.55 5.42 1.55 7.51 1.38 3.08 4.83 7.55 8.85 7.48 2.24-.03 3.67-1.45 6.52-1.45 2.83 0 4.15 1.45 6.94 1.45 4.04 0 7.28-4.18 8.63-7.26-5.42-2.7-5.11-8.55-5.17-8.84zm-5.68-19.6c1.54-1.86 2.58-4.45 2.29-7.02-2.25.11-4.94 1.51-6.5 3.32-1.4 1.68-2.62 4.34-2.3 6.88 2.4.04 4.92-1.45 6.51-3.18z"
                            />
                        </svg>
                        </button>



                    </div>


                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" class="text-xs text-center text-gray-500 uppercase">or sign up with email</a>
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div class="mt-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input 
                                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="mt-4">
                            <div class="flex justify-between">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <Link to="/account/ForgetPassword" class="text-xs text-gray-500">Forget Password?</Link>
                            </div>
                            <input 
                                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" 
                                type="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <div class="mt-8">
                            <button disabled={isloading} class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Sign up</button>
                        </div>

                        {error && <div className="error">{error}</div>}

                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default Signup