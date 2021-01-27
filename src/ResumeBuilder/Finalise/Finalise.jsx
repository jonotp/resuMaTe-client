import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import ResumeTemplateLoader from "../../ResumeTemplate/ResumeTemplateLoader";
import FirebaseContext from "../../Firebase/Firebase.Context";
import "./finalise.scss";

function Finalise({ templateId, resume, onSaveResume }) {
  const firebase = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const oldTitle = document.title;
    document.title = `${resume.firstName} ${resume.lastName} - Resume`;
    window.print();
    document.title = oldTitle;
  };

  const saveResume = async () => {
    const resumeId = resume.resumeId || uuid();
    return await firebase.saveResume(resumeId, resume);
  };

  const downloadPDF = async () => {
    const savedResume = await saveResume();
    try {
      const result = await axios.get(
        `http://localhost:3001/resume-ready/us-central1/api/resume/${templateId}/${savedResume.resumeId}`,
        {
          responseType: "arraybuffer",
          headers: {
            Accept: "application/pdf",
            uid: savedResume.userId,
          },
        }
      );

      const blob = new Blob([result.data], { type: "application/pdf" });
      const link = document.createElement("a");

      link.href = window.URL.createObjectURL(blob);
      link.download = `${savedResume.firstName} ${savedResume.lastName} - Resume.pdf`;
      link.click();

      onSaveResume(saveResume.resumeId);
    } catch (err) {
      console.error("ERRORED WHILE DOWNLOADING: " + err);
    }
  };

  return (
    <div className="resume-builder-section finalise-section">
      <h1 className="resume-builder-heading">Finalise</h1>
      <div className="resume-builder-description">
        Review your information and click the finalise button to save your
        resume as a pdf
      </div>
      <ResumeTemplateLoader resume={resume} templateId={templateId} />
      <GreenButton
        type="submit"
        variant="contained"
        color="primary"
        onClick={async () => await downloadPDF()}
      >
        Finalise
      </GreenButton>
    </div>
  );
}

export default WithPageLoad(Finalise);
