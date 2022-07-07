import Link from "next/link"
import { useRouter } from 'next/router';

export default function profile() {

    const router = useRouter();

    const backHome = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push('/');
    }

    return (
        <div>
            <nav>
                <button onClick={backHome}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </button>
            </nav>
            <div className="logged">
                <h1>You're logged in !</h1>
            </div>
        </div>
  )
}
