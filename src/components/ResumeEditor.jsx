import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const ResumeEditor = ({ onUpdate }) => {
  const { user } = useContext(AuthContext);
  const [resumeData, setResumeData] = useState({
    fullName: `${user.firstName} ${user.lastName}`,
    jobTitle: "",
    email: user.email,
    phone: "",
    address: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    onUpdate({ ...resumeData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Your Resume</h1>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <textarea
        name="experience"
        placeholder="Experience"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      ></textarea>
      <textarea
        name="education"
        placeholder="Education"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      ></textarea>
      <textarea
        name="skills"
        placeholder="Skills"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default ResumeEditor;
