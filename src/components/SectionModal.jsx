import React from "react";

const SectionModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const sections = [
    { id: "profile", name: "Profile", icon: "👤", description: "Make a great first impression." },
    { id: "education", name: "Education", icon: "🎓", description: "Show off your degrees." },
    { id: "experience", name: "Professional Experience", icon: "🏢", description: "Highlight your experience." },
    { id: "skills", name: "Skills", icon: "💡", description: "List your skills." },
    { id: "projects", name: "Projects", icon: "📁", description: "Mention your key projects." },
    { id: "certificates", name: "Certificates", icon: "📜", description: "Industry certifications." },
    { id: "awards", name: "Awards", icon: "🏆", description: "Show your achievements." },
    { id: "interests", name: "Interests", icon: "🎯", description: "Your personal interests." },
    { id: "courses", name: "Courses", icon: "📚", description: "Courses you've completed." },
    { id: "organisations", name: "Organisations", icon: "🏛", description: "Groups you are part of." },
    { id: "references", name: "References", icon: "🤝", description: "People who vouch for you." },
    { id: "declaration", name: "Declaration", icon: "✍", description: "You need a declaration." },
    { id: "publications", name: "Publications", icon: "📖", description: "List your publications." },
    { id: "custom", name: "Custom", icon: "✨", description: "Create your own section." },
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-3/5 lg:w-2/5 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Content</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 flex flex-col items-center justify-center text-center"
              onClick={() => onSelect(section)}
            >
              <span className="text-3xl">{section.icon}</span>
              <strong className="text-lg">{section.name}</strong>
              <p className="text-sm text-gray-600">{section.description}</p>
            </button>
          ))}
        </div>
        <button
          className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          onClick={onClose}
        >
          ✖ Close
        </button>
      </div>
    </div>
  );
};

export default SectionModal;
