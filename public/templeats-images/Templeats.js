export default function Header() {
    const templates = [
        { name: "Resume 1", file: "/templates/Resume1.docx" },
        { name: "Resume 2", file: "/templates/Resume2.docx" },
        { name: "Resume 3", file: "/templates/Resume3.docx" },
        { name: "Resume 4", file: "/templates/Resume4.docx" },
        { name: "Resume 5", file: "/templates/Resume5.docx" },
        { name: "Resume 6", file: "/templates/Resume6.docx" },
    ];

    return (
        <div>
            <h2>Download Resume Templates</h2>
            <ul>
                {templates.map((template, index) => (
                    <li key={index}>
                        <a href={template.file} download>{template.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
