import { useContext, useState } from "react";
import SectionModal from "../components/SectionModal"
import AuthContext from "../context/AuthContext";

const CreateResume = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const  {user}  = useContext(AuthContext);
  console.log(user)
  const [sections, setSections] = useState([]);
  const [resumeData, setResumeData] = useState({
    name: `${user.firstName} ${user.lastName}`,
    jobTitle: "",
    email: user.email,
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const addSection = (section) => {
    setSections([...sections, section]);
    setShowModal(false); // Close modal after selection
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">

        {/* Back Button */}
        <a href="/dashboard" className="text-blue-600 flex items-center mb-4">
          ← Back to Dashboard
        </a>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Resume Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Form */}
          <div>
            <input
              type="text"
              name="name"
              value={resumeData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-3 rounded-lg text-gray-700 mb-3 bg-gray-100"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="jobTitle"
              value={resumeData.jobTitle}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-3 rounded-lg text-gray-700 mb-3 bg-gray-100"
              placeholder="Job Title"
            />
            <input
              type="email"
              name="email"
              value={resumeData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-3 rounded-lg text-gray-700 mb-3 bg-gray-100"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={resumeData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-3 rounded-lg text-gray-700 mb-3 bg-gray-100"
              placeholder="Phone"
            />
            <input
              type="text"
              name="address"
              value={resumeData.address}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-3 rounded-lg text-gray-700 bg-gray-100"
              placeholder="Address"
            />

            {/* Edit / Save / Cancel Buttons */}
            <div className="flex space-x-3 mt-4">
              {isEditing ? (
                <>
                  <button
                    className="bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600"
                    onClick={() => setIsEditing(false)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-500"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 flex items-center"
                  onClick={() => setIsEditing(true)}
                >
                  ✏️ Edit
                </button>
              )}
            </div>
          </div>

          {/* Right Preview */}
          <div className="bg-gray-50 p-6 border rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">{resumeData.name}</h3>
            <p className="text-gray-600">{resumeData.jobTitle}</p>
            <hr className="my-3" />
            <p className="text-gray-700">
              📧 {resumeData.email} | 📞 {resumeData.phone}
            </p>
            <p className="text-gray-700">📍 {resumeData.address}</p>
            <hr className="my-3" />

            {/* Dynamic Sections */}
            {sections.map((section) => (
              <div key={section.id} className="mt-2">
                <p className="font-semibold text-gray-800">{section.icon} {section.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Section Button */}
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 flex items-center mt-6"
          onClick={() => setShowModal(true)}
        >
          ➕ Add Section
        </button>
      </div>

      {/* SectionModal Component - Calls the existing modal */}
      <SectionModal isOpen={showModal} onClose={() => setShowModal(false)} onSelect={addSection} />
    </div>
  );
};

export default CreateResume;
