import React from "react";
import { useState } from "react";
import {
  Route,
  useHistory,
  useLocation,
  Switch,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import data, { getTestCertificates, getTestEducation, getTestExperience, getTestPersonalDetails, getTestReferenceDetails, getTestSkills } from "../testData";
import * as ROUTES from "../routes.js";
import Introduction from "./Introduction";
import Education from "./Education/Education";
import Certification from "./Certification/Certifcation";
import Skills from "./Skills";
import CareerObjective from "./CareerObjective";
import References from "./References";
import Finalise from "./Finalise";
import WorkExperience from "./WorkExperience/WorkExperience";
import "./resume-builder.scss";

const useTestData = true;

const ResumeBuilderPages = [
  ROUTES.RESUME_BUILDER.INTRODUCTION,
  ROUTES.RESUME_BUILDER.EDUCATION,
  ROUTES.RESUME_BUILDER.CERTIFICATIONS,
  ROUTES.RESUME_BUILDER.WORK_EXPERIENCE,
  ROUTES.RESUME_BUILDER.SKILLS,
  ROUTES.RESUME_BUILDER.CAREER_OBJECTIVE,
  ROUTES.RESUME_BUILDER.REFERENCES,
  ROUTES.RESUME_BUILDER.FINALISE]

function ResumeBuilder() {
  const [personalDetails, setPersonalDetails] = useState(!useTestData ? {} : getTestPersonalDetails(data));
  const [education, setEducation] = useState(!useTestData ? [] : getTestEducation(data));
  const [certifications, setCertifications] = useState(!useTestData ? [] : getTestCertificates(data));
  const [experience, setExperience] = useState(!useTestData ? [] : getTestExperience(data));
  const [skills, setSkills] = useState(!useTestData ? [] : getTestSkills(data));
  const [reference, setReferences] = useState(!useTestData ? {} : getTestReferenceDetails(data));
  const [currentPage, setCurrentPage] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();

  const nextPage = () => {
    const newPage = Math.min(currentPage + 1, ResumeBuilderPages.length - 1);
    setCurrentPage(newPage);
    history.push(`${path}${ResumeBuilderPages[newPage]}`);
  }

  const onPageLoad = () => {
    const route = location.pathname.substr(path.length);
    const index = Math.max(ResumeBuilderPages.findIndex(x => x === route), 0);
    setCurrentPage(index);
  }

  console.log({ personalDetails, education, certifications, experience, skills, reference });

  return (
    <div className="resume-builder">
      <Switch>
        <Route exact path={path} render={(props) => (<Introduction {...props} state={personalDetails} setState={setPersonalDetails} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.INTRODUCTION} render={(props) => (<Introduction {...props} state={personalDetails} setState={setPersonalDetails} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.EDUCATION} render={(props) => (<Education {...props} state={education} setState={setEducation} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.CERTIFICATIONS} render={(props) => (<Certification {...props} state={certifications} setState={setCertifications} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.WORK_EXPERIENCE} render={(props) => (<WorkExperience {...props} state={experience} setState={setExperience} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.SKILLS} render={(props) => (<Skills {...props} state={skills} setState={setSkills} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.CAREER_OBJECTIVE} render={(props) => (<CareerObjective {...props} state={personalDetails} setState={setPersonalDetails} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.REFERENCES} render={(props) => (<References {...props} state={reference} setState={setReferences} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Route path={path + ROUTES.RESUME_BUILDER.FINALISE} render={(props) => (<Finalise {...props} state={personalDetails} setState={setPersonalDetails} onContinue={nextPage} onPageLoad={onPageLoad} />)} />
        <Redirect from="*" to={ROUTES.NOT_FOUND} />

      </Switch>
    </div>
  )
}

export default ResumeBuilder;