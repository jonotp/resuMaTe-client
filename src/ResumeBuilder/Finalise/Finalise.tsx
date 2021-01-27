import React, { Dispatch, FormEvent, useContext } from "react";
import axios from "axios";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
// import ResumeTemplateLoader from "../../ResumeTemplate/ResumeTemplateLoader";
import FirebaseContext from "../../Firebase/Firebase.Context";
import "./finalise.scss";
import { IResume } from "../../Shared/Interfaces/Resume.interface";

interface FinaliseProps {
  templateId: string;
  resume: IResume;
}

function Finalise({ templateId, resume }: FinaliseProps) {
  const firebase = useContext(FirebaseContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const oldTitle = document.title;
    document.title = `${resume.firstName} ${resume.lastName} - Resume`;
    window.print();
    document.title = oldTitle;
  };

  const downloadPDF = async () => {
    const savedResume = await firebase.saveResume(resume);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/resume/${templateId}/${savedResume.id}`,
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
      {/* <ResumeTemplateLoader resume={resume} templateId={templateId} /> */}
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
