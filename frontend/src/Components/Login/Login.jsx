import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);

            if (res.data.role === "admin") navigate("/dashboard");
            else navigate("/");

        } catch (error) {
            alert(error.response.data.error);

        };
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
            </form>
        </div>
    )
}

export default Login
