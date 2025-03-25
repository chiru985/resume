import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function DocxViewer() {
    const docs = [
        { uri: "/Resume1.docx" } // Replace with your actual file path
    ];

    return (
        <div style={{ height: "90vh" }}>
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        </div>
    );
}
