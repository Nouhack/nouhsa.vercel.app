import React from "react";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
  console.log("rani hna");
  const pdfUrl = "resume.pdf";

  return (
    <iframe
      src="resume.pdf"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        margin: "0 auto",
        display: "block",
        overflow: "auto",
        marginBottom: 200,
      }}
    />
  );
};

export default Resume;
