import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const DownloadResume = ({ resumeRef }) => {
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
    });

    return (
        <button onClick={handlePrint} className="bg-green-500 px-4 py-2 text-white rounded mt-4">
            Download as PDF
        </button>
    );
};

export default DownloadResume;
