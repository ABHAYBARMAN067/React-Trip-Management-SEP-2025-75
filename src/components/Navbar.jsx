import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white py-2">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="flex items-center space-x-2">
                    <img 
                        src={logo} 
                        alt="Trip Manager Logo" 
                        className="w-8 h-8 rounded-full"  
                    />
                    <span className="text-xl font-bold">
                        Trip Manager
                    </span>
                </Link>

                <div className="space-x-3">
                    <Link 
                        to="/" 
                        className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
                    >
                        Dashboard
                    </Link>
                    <Link 
                        to="/add" 
                        className="px-3 py-1.5 rounded-lg bg-green-500 hover:bg-green-600 transition-colors"
                    >
                        Add Trip
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
