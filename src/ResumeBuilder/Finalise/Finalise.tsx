import React, { useContext, useEffect } from "react";
import axios from "axios";
import WithPageLoad from "../WithPageLoad";
import { GreenButton } from "../../CustomButton/GreenButton";
import FirebaseContext from "../../Firebase/Firebase.Context";
import { IResume } from "../../Shared/Interfaces/Resume.interface";
import PreloaderContext from "../../Preloader/Preloader.Context";
import "./finalise.scss";

interface FinaliseProps {
  templateId: string;
  resume: IResume;
  canDownload: boolean;
}

function Finalise({ templateId, resume, canDownload }: FinaliseProps) {
  const firebase = useContext(FirebaseContext);
  const { setIsLoading } = useContext(PreloaderContext);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (canDownload) {
        await downloadPDF();
      }
      setIsLoading(false);
    })();
  }, []);

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
        {canDownload
          ? "Thank you for using resume ready. If you encountered any download issues please click the button below."
          : "You have missed some fields. Please go to the beginning and complete all mandatory fields"}
      </div>
      <GreenButton
        type="submit"
        variant="contained"
        color="primary"
        disabled={!canDownload}
        onClick={async () => await downloadPDF()}
      >
        Retry Download
      </GreenButton>
    </div>
  );
}

export default WithPageLoad(Finalise);
