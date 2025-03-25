import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeTemplate = () => {
    const router = useRouter();
    const { templateId } = router.query;
    const [resumeData, setResumeData] = useState(null);
    const resumeRef = useRef(null);

    useEffect(() => {
        const data = localStorage.getItem("resumeData");
        if (data) setResumeData(JSON.parse(data));
    }, []);

    const downloadPDF = () => {
        html2canvas(resumeRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 180, 250);
            pdf.save("resume.pdf");
        });
    };

    if (!resumeData) return <p>Loading...</p>;

    return (
        <div ref={resumeRef} style={{ padding: "20px", maxWidth: "600px", margin: "auto", border: "1px solid #ddd" }}>
            <h1>{resumeData.name}</h1>
            <p>Email: {resumeData.email}</p>
            <p>Phone: {resumeData.phone}</p>
            <p>Address: {resumeData.address}</p>
            <h3>Experience</h3>
            <p>{resumeData.experience}</p>
            <h3>Education</h3>
            <p>{resumeData.education}</p>
            <h3>Skills</h3>
            <p>{resumeData.skills}</p>
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    );
};

export default ResumeTemplate;
