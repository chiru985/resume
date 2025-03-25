import Link from 'next/link';
import '../styles/main.css';

const Header = () => {
    return (
        <nav className="navbar bg-white">
            <div className="container">
                <div className="navbar-content">
                    <div className="brand-and-toggler">
                        <Link href="/" className="navbar-brand">
                            <img src="https://cdn4.iconfinder.com/data/icons/job-promotion-18/48/curriculum_vitae_portfolio_file_interface_business-1024.png" alt="Logo" className="navbar-brand-icon" />
                            <span className="navbar-brand-text">build <span>resume.</span></span>
                        </Link>
                        <div className="navbar-links">
                            <Link href="/templeats" className="navbar-link">Templates</Link><br></br>
                            <Link href="/login" className="navbar-link">Login</Link>
                            <Link href="/about" className="navbar-link"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;