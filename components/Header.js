import '../styles/main.css';
import Link from 'next/link';
import ResumeLayout from '../components/ResumeLayout';

export default function Header() {
    return (
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
                        Use professional field-tested resume templates that follow the exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!
                    </p>

                    {/* Resume Layout Component */}
                    <ResumeLayout />
                </div>
            </div>
        </header>
    );
}
