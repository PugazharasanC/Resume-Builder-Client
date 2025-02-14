import React from "react";

const ResumePreview = ({ data, template }) => {
    return (
        <div className="border p-6 bg-white shadow-md">
            {template === "template1" && (
                <div className="text-left font-serif">
                    <h1 className="text-3xl font-bold">{data.fullName}</h1>
                    <p className="text-gray-600">{data.jobTitle}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <hr className="my-4" />
                    <h2 className="text-xl font-semibold">Experience</h2>
                    <p>{data.experience}</p>
                    <h2 className="text-xl font-semibold mt-2">Education</h2>
                    <p>{data.education}</p>
                </div>
            )}

            {template === "template2" && (
                <div className="text-center bg-gray-100 p-4">
                    <h1 className="text-4xl font-extrabold">{data.fullName}</h1>
                    <p className="text-gray-500">{data.jobTitle}</p>
                    <div className="mt-2">
                        <p>Email: {data.email} | Phone: {data.phone}</p>
                    </div>
                    <hr className="my-4" />
                    <h2 className="text-xl font-bold">Experience</h2>
                    <p>{data.experience}</p>
                    <h2 className="text-xl font-bold mt-2">Education</h2>
                    <p>{data.education}</p>
                </div>
            )}

            {template === "template3" && (
                <div className="border-l-4 border-blue-500 pl-4">
                    <h1 className="text-3xl font-semibold">{data.fullName}</h1>
                    <p className="text-gray-600">{data.jobTitle}</p>
                    <p>Email: {data.email} | Phone: {data.phone}</p>
                    <hr className="my-4" />
                    <h2 className="text-xl font-semibold text-blue-600">Experience</h2>
                    <p>{data.experience}</p>
                    <h2 className="text-xl font-semibold text-blue-600 mt-2">Education</h2>
                    <p>{data.education}</p>
                </div>
            )}
        </div>
    );
};

export default ResumePreview;
