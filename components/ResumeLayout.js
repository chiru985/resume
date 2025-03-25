import React from "react";
import Image from "next/image";

export default function ResumeLayout() {
    const resumeTemplates = [
        { src: "/templeats-images/resume1.jpg", name: "Resume 1" },
        { src: "/templeats-images/resume2.jpg", name: "Resume 2" },
        { src: "/templeats-images/resume3.jpg", name: "Resume 3" },
        { src: "/templeats-images/resume4.jpg", name: "Resume 4" },
        { src: "/templeats-images/resume5.jpg", name: "Resume 5" },
        { src: "/templeats-images/resume6.jpg", name: "Resume 6" },
    ];

    return (
        <div>
            <h2>Resume Templates</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {resumeTemplates.map((template, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                        <Image
                            src={template.src}
                            alt={template.name}
                            width={300} 
                            height={260}
                            style={{ border: "1px solid #ddd" }}
                        />
                        <p>{template.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

