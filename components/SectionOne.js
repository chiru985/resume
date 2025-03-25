// components/SectionOne.js
import Link from "next/link";
const SectionOne = () => {
    return (
        <div className="section-one">
            <div className="container">
                <div className="section-one-content">
                    <div className="section-one-l">
                        <img src="https://th.bing.com/th/id/OIP.WLvuYdt7VN4qrX70Ooe_JQHaEh?w=900&h=550&rs=1&pid=ImgDetMain" alt="Visual" />
                    </div>
                    <div className="section-one-r text-center">
                        <h2 className="lg-title">Use the best resume maker as your guide!</h2>
                        <p className="text">Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
                        <div className="btn-group">
                            {/* <Link href="/resume" className="btn btn-primary text-uppercase">create my resume</Link> */}
                            <Link href="#" className="btn btn-secondary text-uppercase">watch video</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;