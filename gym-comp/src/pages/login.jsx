import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function validateCredentials() {
        console.log(username, password);
        try {
            const response = await fetch("http://localhost:5000/login?username=" + username + "&password=" + password);
            //const data = await response.json();
            //console.log(data);
            navigate("/home");
        } catch (e) {
            console.log(e);
            window.alert("Connection error, please try again later");
        }

    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    return (
        <div className="">
            <h1 className="text-5xl pb-[10px] text-accent">Log In</h1>
            <div className="flex pt-[10px] text-3xl text-accent">
                <h2 className="pe-[10px] w-[10ch]">Username:</h2>
                <input className="text-[#000000]" value={username} onChange={handleUsername} placeholder="username"></input>
            </div>
            <div className="flex pt-[10px] text-3xl text-accent">
                <h2 className="pe-[10px] w-[10ch]">Password:</h2>
                <input className="text-[#000000]" value={password} onChange={handlePassword} placeholder="password"></input>
            </div>
            <br></br>
            <button className="bg-secondary text-accent border-black mt-[10px]" onClick={validateCredentials}>Log In</button>
        </div>
    )
}