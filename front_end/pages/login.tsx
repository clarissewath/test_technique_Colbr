import Link from "next/link"

export default function loginForm() {
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

            <form action="http://127.0.0.1:8000/api/login" method="post">
            
                <label htmlFor="last">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="last">Password</label>
                <input type="password" id="pwd" name="password" required />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}