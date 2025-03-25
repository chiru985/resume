import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ResumePreview() {
    const router = useRouter();
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("resumeData");
        if (data) setResumeData(JSON.parse(data));
    }, []);

    if (!resumeData) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", border: "1px solid #ddd" }}>
            <h2>Resume Preview</h2>
            <p><strong>Name:</strong> {resumeData.name}</p>
            <p><strong>Email:</strong> {resumeData.email}</p>
            <p><strong>Phone:</strong> {resumeData.phone}</p>
            <p><strong>Address:</strong> {resumeData.address}</p>
            <p><strong>Experience:</strong> {resumeData.experience}</p>
            <p><strong>Education:</strong> {resumeData.education}</p>
            <p><strong>Skills:</strong> {resumeData.skills}</p>
            <button onClick={() => router.push("/templates/ResumeTemplate1")}>Choose Template</button>
        </div>
    );
}
