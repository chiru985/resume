import Template1 from './Template1';
import Template2 from './Template2';

const Templates = ({ formData, selectedTemplate }) => {
    switch (selectedTemplate) {
        case 'template1':
            return <Template1 formData={formData} />;
        case 'template2':
            return <Template2 formData={formData} />;
        default:
            return <Template1 formData={formData} />;
    }
};

export default Templates;
