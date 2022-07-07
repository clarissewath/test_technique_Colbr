import Link from "next/link"
import axios from "axios"
import { useState, ChangeEvent } from "react"
import { useRouter } from 'next/router';

export default function loginForm() {

    const router = useRouter();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
        const value = e.target.value;
        const name = e.target.name;
        setData({...data, [name]: value});
    }

    const fetchData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const url = "http://127.0.0.1:8000/api/login";
        
            let dataForm = new FormData()
            dataForm.append('email', data.email);
            dataForm.append('password', data.password);
    
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
            let result = JSON.stringify(response.data.success);
            if (result)
                {
                    router.push('/profile');
                }
            })
            .catch(function (error) {
            console.log(error);
            });
        } catch (error) {
            alert("Information not valid");
        }
    };
    console.log(data);

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
                                <Link href="/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <form onSubmit={fetchData}>
                <label htmlFor="last">Email</label>
                <input type="email" id="email" name="email" onChange={e=> handleChange(e)} required />

                <label htmlFor="last">Password</label>
                <input type="password" id="pwd" name="password" onChange={e=> handleChange(e)} required />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}