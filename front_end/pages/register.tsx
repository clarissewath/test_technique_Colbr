import Link from "next/link"
import axios from "axios"
import { useState, ChangeEvent } from "react"
import { useRouter } from 'next/router';

export default function registerForm() {
    
    const router = useRouter();

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
            let result = JSON.stringify(response.data.success);
            if (result)
                {
                    router.push('/login');
                }
            })
            .catch(function (error) {
            console.log(error);
            });
        } catch (error) {
            alert("Information not valid");
        }
    };
    //console.log(data);
    
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form onSubmit={fetchData} className="bg-gray-700 shadow-md rounded-lg mt-[5%] px-20 pt-8 pb-8 mb-4 min-h-[50%]">
                <label htmlFor="first" className="block text-sm font-bold mb-2 text-white">First Name</label>
                <input type="text" id="first" name="first" onChange={e=> handleChange(e)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First name"/>

                <label htmlFor="last" className="block text-sm font-bold mb-2 mt-4 text-white">Last Name</label>
                <input type="text" id="last" name="last" onChange={e=> handleChange(e)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last name"/>

                <label htmlFor="last" className="block text-sm font-bold mb-2 mt-4 text-white">Email</label>
                <input type="email" id="email" name="email" onChange={e=> handleChange(e)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email"/>

                <label htmlFor="last" className="block text-sm font-bold mb-2 mt-4 text-white">Password</label>
                <input type="password" id="pwd" name="password" onChange={e=> handleChange(e)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password"/>

                <label htmlFor="last" className="block text-sm font-bold mb-2 mt-4 text-white">Confirm you password</label>
                <input type="password" id="c_pwd" name="c_password" onChange={e=> handleChange(e)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password"/>

                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-white hover:bg-black text-gray-700 font-bold py-2 px-4 mt-6 rounded focus:outline-none focus:shadow-outline">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}