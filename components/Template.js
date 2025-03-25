import ResumeTemplate1 from './ResumeTemplate1';
import ResumeTemplate2 from './ResumeTemplate2';
// Import other templates...

const Templates = ({ formData, selectedTemplate }) => {
    switch (selectedTemplate) {
        case 'template1':
            return <ResumeTemplate1 formData={formData} />;
        case 'template2':
            return <ResumeTemplate2 formData={formData} />;
        // Add cases for other templates...
        default:
            return <ResumeTemplate1 formData={formData} />;
    }
};

export default Templates;