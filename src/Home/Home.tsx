import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col bg-gray-100">
            <Navbar />
            <Footer />
        </div>
    )
}


