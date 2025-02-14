import React from "react";
import { useNavigate } from "react-router-dom";

const templates = [
    { id: "template1", name: "Classic Resume", preview: "/images/template1.png" },
    { id: "template2", name: "Modern Resume", preview: "/images/template2.png" },
    { id: "template3", name: "Professional Resume", preview: "/images/template3.png" },
];

const Dashboard = () => {
    const navigate = useNavigate();

    const handleSelect = (templateId) => {
        navigate(`/create-resume?template=${templateId}`);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Resume Template</h1>
            <div className="grid grid-cols-3 gap-6">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="border p-4 rounded-lg shadow-lg bg-white cursor-pointer hover:border-blue-500"
                        onClick={() => handleSelect(template.id)}
                    >
                        <img src={template.preview} alt={template.name} className="w-full rounded-md" />
                        <h2 className="text-center mt-2 font-semibold">{template.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
