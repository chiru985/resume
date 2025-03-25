import React, { useState } from "react";
import styles from "../styles/Form.module.css"; // Import CSS module

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    designation: "",
    address: "",
    email: "",
    phoneno: "",
    summary: "",
    achievements: [{ title: "", description: "" }],
    experiences: [{ title: "", organization: "", location: "", startDate: "", endDate: "", description: "" }],
    education: [{ school: "", degree: "", city: "", startDate: "", endDate: "", description: "" }],
    projects: [{ title: "", link: "", description: "" }],
    skills: [""], // Start with one empty skill
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index, field, value, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index][field] = value;
    setFormData((prev) => ({ ...prev, [key]: updatedArray }));
  };

  const addNewEntry = (key, newItem) => {
    setFormData((prev) => ({ ...prev, [key]: [...prev[key], newItem] }));
  };

  const removeEntry = (key, index) => {
    const updatedArray = formData[key].filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, [key]: updatedArray }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Build Own Resume Form</h2>
      <form>
        {/* Basic Information */}
        <div className={styles.section}>
          <h3 className={styles.subheading}>Basic Information</h3>
          <input className={styles.inputField} type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" />
          <input className={styles.inputField} type="text" name="middlename" value={formData.middlename} onChange={handleChange} placeholder="Middle Name" />
          <input className={styles.inputField} type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" />
          <input className={styles.inputField} type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" />
          <input className={styles.inputField} type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
          <input className={styles.inputField} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input className={styles.inputField} type="tel" name="phoneno" value={formData.phoneno} onChange={handleChange} placeholder="Phone Number" />
          <textarea className={styles.textArea} name="summary" value={formData.summary} onChange={handleChange} placeholder="Summary"></textarea>
        </div>

        {/* Education */}
        <div className={styles.section}>
          <h3 className={styles.subheading}>Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className={styles.entry}>
              <input className={styles.inputField} type="text" value={edu.school} onChange={(e) => handleArrayChange(index, "school", e.target.value, "education")} placeholder="School / University" />
              <input className={styles.inputField} type="text" value={edu.degree} onChange={(e) => handleArrayChange(index, "degree", e.target.value, "education")} placeholder="Degree / Course" />
              <input className={styles.inputField} type="text" value={edu.city} onChange={(e) => handleArrayChange(index, "city", e.target.value, "education")} placeholder="City" />
              <input className={styles.inputField} type="date" value={edu.startDate} onChange={(e) => handleArrayChange(index, "startDate", e.target.value, "education")} />
              <input className={styles.inputField} type="date" value={edu.endDate} onChange={(e) => handleArrayChange(index, "endDate", e.target.value, "education")} />
              <textarea className={styles.textArea} value={edu.description} onChange={(e) => handleArrayChange(index, "description", e.target.value, "education")} placeholder="Description"></textarea>
              <button type="button" className={styles.smallRemoveButton} onClick={() => removeEntry("education", index)}>X</button>
            </div>
          ))}
          <button type="button" className={styles.addButton} onClick={() => addNewEntry("education", { school: "", degree: "", city: "", startDate: "", endDate: "", description: "" })}>+ Add Education</button>
        </div>

        {/* Experiences */}
        <div className={styles.section}>
          <h3 className={styles.subheading}>Experience</h3>
          {formData.experiences.map((exp, index) => (
            <div key={index} className={styles.entry}>
              <input className={styles.inputField} type="text" value={exp.title} onChange={(e) => handleArrayChange(index, "title", e.target.value, "experiences")} placeholder="Job Title" />
              <input className={styles.inputField} type="text" value={exp.organization} onChange={(e) => handleArrayChange(index, "organization", e.target.value, "experiences")} placeholder="Organization" />
              <input className={styles.inputField} type="text" value={exp.location} onChange={(e) => handleArrayChange(index, "location", e.target.value, "experiences")} placeholder="Location" />
              <input className={styles.inputField} type="date" value={exp.startDate} onChange={(e) => handleArrayChange(index, "startDate", e.target.value, "experiences")} />
              <input className={styles.inputField} type="date" value={exp.endDate} onChange={(e) => handleArrayChange(index, "endDate", e.target.value, "experiences")} />
              <textarea className={styles.textArea} value={exp.description} onChange={(e) => handleArrayChange(index, "description", e.target.value, "experiences")} placeholder="Description"></textarea>
              <button type="button" className={styles.smallRemoveButton} onClick={() => removeEntry("experiences", index)}>X</button>
            </div>
          ))}
          <button type="button" className={styles.addButton} onClick={() => addNewEntry("experiences", { title: "", organization: "", location: "", startDate: "", endDate: "", description: "" })}>+ Add Experience</button>
        </div>

        {/* Projects */}
        <div className={styles.section}>
          <h3 className={styles.subheading}>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index} className={styles.entry}>
              <input className={styles.inputField} type="text" value={project.title} onChange={(e) => handleArrayChange(index, "title", e.target.value, "projects")} placeholder="Project Title" />
              <input className={styles.inputField} type="text" value={project.link} onChange={(e) => handleArrayChange(index, "link", e.target.value, "projects")} placeholder="Project Link" />
              <textarea className={styles.textArea} value={project.description} onChange={(e) => handleArrayChange(index, "description", e.target.value, "projects")} placeholder="Project Description"></textarea>
              <button type="button" className={styles.smallRemoveButton} onClick={() => removeEntry("projects", index)}>X</button>
            </div>
          ))}
          <button type="button" className={styles.addButton} onClick={() => addNewEntry("projects", { title: "", link: "", description: "" })}>+ Add Project</button>
        </div>

        {/* Skills */}
        <div className={styles.section}>
          <h3 className={styles.subheading}>Skills</h3>
          {formData.skills.map((skill, index) => (
            <div key={index} className={styles.entry}>
              <input className={styles.inputField} type="text" value={skill} onChange={(e) => handleArrayChange(index, "", e.target.value, "skills")} placeholder={`Skill ${index + 1}`} />
              <button type="button" className={styles.smallRemoveButton} onClick={() => removeEntry("skills", index)}>X</button>
            </div>
          ))}
          <button type="button" className={styles.addButton} onClick={() => addNewEntry("skills", "")}>+ Add Skill</button>
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default RecruitmentForm;
