import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/main.css';

export default function Home() {
    // Array of resume templates with image links and corresponding pages
    const imageLinks = [
        { src: "/templeats-images/resume1.jpg", page: "/form" },
        { src: "/templeats-images/resume2.jpg", page: "/form" },
        { src: "/templeats-images/resume3.jpg", page: "/form" },
        { src: "/templeats-images/resume4.jpg", page: "/form" },
        { src: "/templeats-images/resume5.jpg", page: "/form" },
        { src: "/templeats-images/resume6.jpg", page: "/form" },
        { src: "/templeats-images/resume7.jpg", page: "/form" },
        { src: "/templeats-images/resume8.jpg", page: "/form" }, 
    ];

    // Debugging: Log the imageLinks array
    console.log(imageLinks);

    return (
        <div>
            <Head>
                <title>Resume Builder</title>
                <meta name="description" content="Build your perfect resume with our online resume builder." />
            </Head>

            {/* Navbar */}
            <nav className="navbar bg-white">
                <div className="container">
                    <div className="navbar-content">
                        <div className="brand-and-toggler">
                            <Link href="/" className="navbar-brand">
                                <img src="https://cdn4.iconfinder.com/data/icons/job-promotion-18/48/curriculum_vitae_portfolio_file_interface_business-1024.png" alt="Logo" className="navbar-brand-icon" />
                                <span className="navbar-brand-text">build <span>resume.</span></span>
                            </Link>
                            <div className="navbar-links">
                                <Link href="/templeats" className="navbar-link">Templates</Link>
                                <Link href="/login" className="navbar-link"></Link>
                                <Link href="/about" className="navbar-link"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header Section */}
            <header className="header bg-bright" id="header">
                <div className="container">
                    <div className="header-content text-center">
                        <h6 className="text-uppercase text-blue-dark fs-14 fw-6 ls-1">
                            Online Resume Builder
                        </h6>
                        <h1 className="lg-title">
                            Only 2% of resumes make it past the first round. Be in the top 2%
                        </h1>
                        <p className="text-dark fs-18">
                            Use professional field-tested resume templates that follow the exact 'resume rules' employers look for.
                        </p>

                        {/* Resume Templates Grid */}
                        <div className="resume-grid">
                            {imageLinks.map((item, index) => (
                                <Link href={item.page} key={index} passHref>
                                    <div>
                                        <Image 
                                            src={item.src} 
                                            alt={`Resume Template ${index + 1}`} 
                                            width={200} 
                                            height={280} 
                                            style={{ cursor: "pointer" }} 
                                        />
                                        <p>Resume {index + 1}</p> {/* Debugging: Display text for each resume */}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Section One */}
            <div className="section-one">
                <div className="container">
                    <div className="section-one-content">
                        <div className="section-one-l">
                            <img src="https://th.bing.com/th/id/OIP.WLvuYdt7VN4qrX70Ooe_JQHaEh?w=900&h=550&rs=1&pid=ImgDetMain" alt="Visual" />
                        </div>
                        <div className="section-one-r text-center">
                            <h2 className="lg-title">Use the best resume maker as your guide!</h2>
                            <p className="text">
                                Getting that dream job can seem like an impossible task. We're here to change that.
                            </p>
                            <div className="btn-group">
                                <Link href="#" className="btn btn-secondary text-uppercase">watch video</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Two */}
            <div className="section-two bg-bright">
                <div className="container">
                    <div className="section-two-content">
                        <div className="section-items">
                            <div className="section-item">
                                <div className="section-item-icon">
                                    <img src="https://media.tenor.com/8Er0lHRnauMAAAAi/trophy.gif" alt="Feature 1" />
                                </div>
                                <h5 className="section-item-title">Make a resume that wins interviews!</h5>
                                <p className="text">
                                    Use our resume maker with its advanced creation tools to tell your professional story.
                                </p>
                            </div>
                            <div className="section-item">
                                <div className="section-item-icon">
                                    <img src="https://th.bing.com/th/id/OIP.qOBAir9VXHKHAOnWbgErHAAAAA?w=157&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Feature 2" />
                                </div>
                                <h5 className="section-item-title">Resume writing made easy!</h5>
                                <p className="text">
                                    Resume writing has never been this effortless. Pre-generated text, visual designs, and more.
                                </p>
                            </div>
                            <div className="section-item">
                                <div className="section-item-icon">
                                    <img src="https://cdn0.iconfinder.com/data/icons/human-resources-29/66/11-512.png" alt="Feature 3" />
                                </div>
                                <h5 className="section-item-title">A recruiter-tested CV maker tool</h5>
                                <p className="text">
                                    Our resume builder and its pre-generated content are tested by recruiters and IT experts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer bg-dark">
                <div className="container">
                    <div className="footer-content text-center">
                        <p className="fs-15">&copy;<span>build.resume</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}