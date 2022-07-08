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
    //console.log(data);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form onSubmit={fetchData} className="bg-gray-700 shadow-md rounded-lg px-20 pt-6 pb-8 mb-4 h-[30%]">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2 text-white">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" id="email" name="email" type="email" onChange={e=> handleChange(e)} required/>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2 text-white" >
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="pwd" name="password" type="password" placeholder="Password" onChange={e=> handleChange(e)} required/>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-white hover:bg-black text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Log In
                    </button>
                </div>
            </form>
        </div>
    )
}