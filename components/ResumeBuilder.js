import styles from './ResumeBuilder.module.css';

const ResumeBuilder = () => {
  const generatePDF = () => {
    // Your PDF generation logic here
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Resume Builder</h1>
      {/* Form Section */}
      <div className={styles.formContainer}>
        {/* Form fields and other elements */}
      </div>
      {/* Resume Preview Section */}
      <div id="resume-content" className={styles.resumePreview}>
        {/* Resume preview elements */}
      </div>
      Download PDF Button
      <div className={styles.buttonContainer}>
        <button onClick={generatePDF} className={styles.downloadBtn}>Download Resume (PDF)</button>
      </div>
    </div>
  );
};

export default ResumeBuilder;

