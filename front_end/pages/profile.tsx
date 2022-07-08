import Link from "next/link"
import { useRouter } from 'next/router';

export default function profile() {

    const router = useRouter();

    const backHome = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push('/');
    }

    return (
        <div>
            <nav className="flex justify-end">
                <button onClick={backHome} className="hover:bg-black focus:outline-none focus:shadow-outline mt-4 mr-4 text-white border bg-gray-700 px-4 py-2 rounded">
                    <Link href="/">
                        <a>Log out</a>
                    </Link>
                </button>
            </nav>
            <div className="logged">
                <h1 className="text-center mt-[10%] text-6xl font-bold">You're logged in !</h1>
            </div>
        </div>
  )
}
