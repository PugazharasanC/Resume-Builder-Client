import React from "react";
import { useNavigate } from "react-router-dom";

const templates = [
    { id: "template1", name: "Classic", preview: "/images/template1.png" },
    { id: "template2", name: "Modern", preview: "/images/template2.png" },
    { id: "template3", name: "Professional", preview: "/images/template3.png" },
];

const SelectTemplate = () => {
    const navigate = useNavigate();

    const handleSelect = (templateId) => {
        navigate(`/create-resume?template=${templateId}`);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Choose a Resume Template</h1>
            <div className="grid grid-cols-3 gap-6">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="border p-4 cursor-pointer hover:border-blue-500"
                        onClick={() => handleSelect(template.id)}
                    >
                        <img src={template.preview} alt={template.name} className="w-full" />
                        <h2 className="text-center mt-2">{template.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectTemplate;
