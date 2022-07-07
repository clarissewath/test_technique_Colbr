import Link from "next/link"
import axios from "axios"
import { useState, ChangeEvent } from "react"


export default function registerForm() {
    
    const [data, setData] = useState({
        first: '',
        last: '',
        email: '',
        password: '',
        c_password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
        const value = e.target.value;
        const name = e.target.name;
        setData({...data, [name]: value});
    }

    const fetchData = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        try {
            const url = "http://127.0.0.1:8000/api/register";
        
            let dataForm = new FormData()
            dataForm.append('name', data.first);
            dataForm.append('lastname', data.last);
            dataForm.append('email', data.email);
            dataForm.append('password', data.password);
            dataForm.append('c_password', data.c_password);
    
    
            let config = {
                method: 'post',
                url: url,
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data : dataForm
            };
              
            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        } catch (error) {
            console.log(error)
        }
       
    };
    //console.log(data);
    
    return (
        <div>
            <header className="header">
                <div className="nav-box">
                    <nav>
                        <ul className="menu-bar">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <form onSubmit={fetchData}>
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" name="first" onChange={e=> handleChange(e)} required />

                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" name="last" onChange={e=> handleChange(e)} required />

                <label htmlFor="last">Email</label>
                <input type="email" id="email" name="email" onChange={e=> handleChange(e)} required />

                <label htmlFor="last">Password</label>
                <input type="password" id="pwd" name="password" onChange={e=> handleChange(e)} required />

                <label htmlFor="last">Confirm you password</label>
                <input type="password" id="c_pwd" name="c_password" onChange={e=> handleChange(e)} required />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}