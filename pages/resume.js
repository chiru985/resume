// pages/resume.js
import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../styles/main.css'; // Import your CSS file
// import ResumeCode from '@/pages/ResumeCode1';

export default function Resume() {
    return (
        <div>
            <Head>
                <title>Resume Page</title>
                <meta name="description" content="Create your resume" />
            </Head>
            <Navbar />
            {/* <ResumeCode /> */}
            <Footer />
        </div>
    );
}

