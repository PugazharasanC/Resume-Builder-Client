import React from "react";

const templates = [
    { id: "template1", name: "Classic", preview: "/images/template1.png" },
    { id: "template2", name: "Modern", preview: "/images/template2.png" },
    { id: "template3", name: "Professional", preview: "/images/template3.png" },
];

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Choose a Resume Template</h2>
            <div className="grid grid-cols-3 gap-4">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`p-2 border-2 ${
                            selectedTemplate === template.id ? "border-blue-500" : "border-gray-300"
                        } cursor-pointer`}
                        onClick={() => setSelectedTemplate(template.id)}
                    >
                        <img src={template.preview} alt={template.name} className="w-full" />
                        <p className="text-center mt-2">{template.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelector;
