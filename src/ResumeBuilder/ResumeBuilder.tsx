import React, { useState, useEffect, useContext } from "react";
import {
  Route,
  useHistory,
  useLocation,
  Switch,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import {
  getResumeId,
  getCertificates,
  getEducation,
  getExperience,
  getPersonalDetails,
  getSkills,
} from "./ResumeFunctions";
import testData from "../TestData";
import { v4 as uuid } from "uuid";
import * as ROUTES from "../routes";
import Introduction from "./Introduction/Introduction";
import Education from "./Education/Education";
import Certifications from "./Certifications/Certifcations";
import Skills from "./Skills/Skills";
// import References from "./References";
import Finalise from "./Finalise/Finalise";
import WorkExperience from "./WorkExperience/WorkExperience";
import Personal from "./Personal/Personal";
import ResumeBuilderSideBar from "./ResumeBuilderSideBar";
import FirebaseContext from "../Firebase/Firebase.Context";
import { ITemplate } from "../Shared/Interfaces/Template.interface";
import Preloader from "../Preloader/Preloader";
import { DefaultPersonal } from "../Shared/Interfaces/Personal.interface";
import { IEducation } from "../Shared/Interfaces/Education.interface";
import { ICertificate } from "../Shared/Interfaces/Certificate.interface";
import { IExperience } from "../Shared/Interfaces/Experience.interface";
import "./resume-builder.scss";
import { ISkill } from "../Shared/Interfaces/Skill.interface";

const useTestData = false;

const ResumeBuilderPages = [
  ROUTES.RESUME_BUILDER.INTRODUCTION,
  ROUTES.RESUME_BUILDER.PERSONAL,
  ROUTES.RESUME_BUILDER.EDUCATION,
  ROUTES.RESUME_BUILDER.CERTIFICATIONS,
  ROUTES.RESUME_BUILDER.WORK_EXPERIENCE,
  ROUTES.RESUME_BUILDER.SKILLS,
  // ROUTES.RESUME_BUILDER.REFERENCES,
  ROUTES.RESUME_BUILDER.FINALISE,
];

function ResumeBuilder() {
  const [resumeId, setResumeId] = useState(uuid());
  const [isNewResume, setIsNewResume] = useState(true);
  const [selectedTemplateId, setSeletedTemplateId] = useState("");
  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [personalDetails, setPersonalDetails] = useState(DefaultPersonal);
  const [education, setEducation] = useState<IEducation[]>([]);
  const [certificates, setCertifications] = useState<ICertificate[]>([]);
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);
  // const [reference, setReferences] = useState(
  //   !useTestData ? {} : getTestReferenceDetails(data)
  // );
  const [currentPage, setCurrentPage] = useState(0);
  const [latestPage, setLatestPage] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const firebase = useContext(FirebaseContext);
  const { path } = useRouteMatch();

  const nextPage = () => {
    const newPage = Math.min(currentPage + 1, ResumeBuilderPages.length - 1);
    setLatestPage(Math.max(latestPage, newPage));
    setCurrentPage(newPage);
    history.push(`${path}${ResumeBuilderPages[newPage]}`);
  };

  const onPageLoad = () => {
    const route = location.pathname.substr(path.length);
    const index = Math.max(
      ResumeBuilderPages.findIndex((x) => x === route),
      0
    );
    setCurrentPage(index);
  };

  useEffect(() => {
    try {
      (async () => {
        const data = useTestData
          ? testData
          : firebase.isAutheticated()
            ? await firebase.getResume()
            : null;

        if (data !== null) {
          setResumeId(getResumeId(data));
          setPersonalDetails(getPersonalDetails(data));
          setEducation(getEducation(data));
          setCertifications(getCertificates(data));
          setExperience(getExperience(data));
          setSkills(getSkills(data));
        }
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      (async () => {
        const firebaseTemplates = await firebase.getTemplates();
        setTemplates(firebaseTemplates);
        setSeletedTemplateId(firebaseTemplates[0].templateId);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="resume-builder">
      <ResumeBuilderSideBar latestPage={latestPage} />
      <Switch>
        <Route
          exact
          path={path}
          render={(props) => (
            <Introduction
              {...props}
              templates={templates}
              onSelect={setSeletedTemplateId}
              onContinue={nextPage}
              onPageLoad={onPageLoad}
            />
          )}
        />
        <Route
          path={path + ROUTES.RESUME_BUILDER.INTRODUCTION}
          render={(props) => (
            <Introduction
              {...props}
              templates={templates}
              selectedTemplate={selectedTemplateId}
              onSelect={setSeletedTemplateId}
              onContinue={nextPage}
              onPageLoad={onPageLoad}
            />
          )}
        />
        <Route
          path={path + ROUTES.RESUME_BUILDER.PERSONAL}
          render={(props) => (
            <Personal
              {...props}
              state={personalDetails}
              setState={setPersonalDetails}
              onContinue={nextPage}
              onPageLoad={onPageLoad}
            />
          )}
        />
        <Route
          path={path + ROUTES.RESUME_BUILDER.EDUCATION}
          render={(props) => (
            <Education
              {...props}
              state={education}
              setState={setEducation}
              onContinue={nextPage}
              onPageLoad={onPageLoad}
            />
          )}
        />
        <Route
          path={path + ROUTES.RESUME_BUILDER.CERTIFICATIONS}
          render={(props) => (
            <Certifications
              {...props}
              state={certificates}
              setState={setCertifications}
              onContinue={nextPage}
              onPageLoad={onPageLoad}
            />
          )}
        />
        <Route
          path={path + ROUTES.RESUME_BUILDER.WORK_EXPERIENCE}
          render={(props) => (
            <WorkExperience
              {...props}
              state={experience}
              setState={setExperience}
              onContinue={nextPage}
              onPageLoad={onPageLoad}
            />
          )}
        />
        <Route
          path={path + ROUTES.RESUME_BUILDER.SKILLS}
          render={(props) => (
            <Skills
              {...props}
              state={skills}
              setState={setSkills}
              onContinue={nextPage}
              onPageLoad={onPageLoad}
            />
          )}
        />
        {/* <Route path={path + ROUTES.RESUME_BUILDER.REFERENCES} render={(props) => (<References {...props} state={reference} setState={setReferences} onContinue={nextPage} onPageLoad={onPageLoad} />)} /> */}
        <Route
          path={path + ROUTES.RESUME_BUILDER.FINALISE}
          render={(props) => (
            <Finalise
              {...props}
              templateId={selectedTemplateId}
              resume={{
                id: resumeId,
                ...personalDetails,
                education,
                certificates,
                experience,
                skills,
              }}
              isNewResume={isNewResume}
              canDownload={latestPage === ResumeBuilderPages.length - 1}
              onPageLoad={onPageLoad}
            />
          )}
        />
        <Redirect from="*" to={ROUTES.NOT_FOUND} />
      </Switch>
      <Preloader />
    </div>
  );
}

export default ResumeBuilder;
