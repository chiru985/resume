// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '@/components/Header';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import Footer from '../components/Footer';
import '../styles/main.css'; // Import your CSS file

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Online Resume Builder" />
            </Head>
            <Navbar />
            <Header/>
            <SectionOne />
            <SectionTwo />
            <Footer />
        </div>
    );
}