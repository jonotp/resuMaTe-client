const REFERENCE_TYPE = {
  UPON_REQUEST: 0,
  INCLUDE: 1,
  DO_NOT_INCLUDE: 2,
};

const EDUCATION_TYPE = {
  HIGH_SCHOOL: 0,
  UNIVERSITY_OR_COLLEGE: 1,
  OTHER: 2,
};

const data = {
  firstName: "Jonathan",
  lastName: "Pham",
  email: "jonathanphame@gmail.com",
  phone: "+61 400 000 000",
  positionTitle: "Software Engineer",
  address: "15 test street, Wollongong, NSW",

  // Nullable
  careerObjective: `A meticulous hardworking individual with a strong passion for anything technology related, whether it be science, computers or programming. Possess strong planning and analytical skills and a thirst for problem solving opportunities. Willing to listen, learn, experience and contribute to innovative ideas.`,
  education: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      schoolType: EDUCATION_TYPE.UNIVERSITY_OR_COLLEGE,
      schoolName: "University of Wollongong",
      location: "Australia, NSW, Wollongong",
      program: "Bachelor of Computer Science",
      mark: "WAM 89",
      startDate: "2016-02-15T00:00:00.000Z",
      completionDate: "2018-12-15T00:00:00.000Z",
      hasGraduated: true,
      awards: [],
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      schoolType: EDUCATION_TYPE.UNIVERSITY_OR_COLLEGE,
      schoolName: "University of Wollongong",
      program: "Bachelor of Science Major in Nanotechnology",
      mark: "WAM 89",
      startDate: "2016-02-15T00:00:00.000Z",
      completionDate: "2018-12-15T00:00:00.000Z",
      hasGraduated: true,
      awards: [],
    },
  ],
  experience: [
    {
      id: "4e2f2da9-2520-41d1-8807-d571532b3fbe",
      title: "Web Developer / Project Manager",
      company: "Self Employed",
      location: "NSW, Wollongong",
      isCurrentJob: true,
      startDate: "2020-03-15T00:00:00.000Z",
      endDate: null,
      responsibilities: `Performing discovery to identify client challenges & translating them into developmental tasks,

Delegating task, managing time-frames and client expectations for a team of 3 software developers following agile scrum methodology,

Frequent communication & collaboration with clients to deliver an effective solution for their business needs,

Creating web-applications with VueJS, NodeJS, Firebase and modern design styles
      `,
    },
    {
      id: "da732612-db45-4ff6-ae52-e7b964368297",
      title: "Software Developer",
      company: "DealerCell",
      location: "NSW, Wollongong",
      isCurrentJob: false,
      startDate: "2019-01-15T00:00:00.000Z",
      endDate: "2020-03-15T00:00:00.000Z",
      responsibilities: `Participated and since January 2020 lead the development of a reporting web-application that optimises rendering through canvas and is agnostic through NoSql models
    
Mentoring new developers on development stack and in-house framework

Creating responsive UIs in AngularJs, backend APIs with C# .Net Framework 4.5+ and models in TSQL for a Sales CRM web-application used by over 400 dealerships in the automotive industry

Implementing application integration with 3rd party tools such as SEQ, JIRA and Slack, to assist with debugging and triaging production-based issues`,
    },
//     {
//       id: "4e2f2da9-2520-41d1-8807-d571532b3fb1",
//       title: "SOFTWARE TEST ENGINEER",
//       company: "University of Wollongong",
//       location: "NSW, Wollongong",
//       isCurrentJob: true,
//       startDate: "2020-03-15T00:00:00.000Z",
//       endDate: null,
//       responsibilities: `Performing discovery to identify client challenges & translating them into developmental tasks,

// Delegating task, managing time-frames and client expectations for a team of 3 software developers following agile scrum methodology,

// Frequent communication & collaboration with clients to deliver an effective solution for their business needs,

// Creating web-applications with VueJS, NodeJS, Firebase and modern design styles
//       `,
//     },
//     {
//       id: "4e2f2da9-2520-41d1-8807-d571532b3fb2",
//       title: "SERVICE DESK OFFICER",
//       company: "University of Wollongong",
//       location: "NSW, Wollongong",
//       isCurrentJob: true,
//       startDate: "2020-03-15T00:00:00.000Z",
//       endDate: null,
//       responsibilities: `Performing discovery to identify client challenges & translating them into developmental tasks,

// Delegating task, managing time-frames and client expectations for a team of 3 software developers following agile scrum methodology,

// Frequent communication & collaboration with clients to deliver an effective solution for their business needs,

// Creating web-applications with VueJS, NodeJS, Firebase and modern design styles
//       `,
//     },
//     {
//       id: "4e2f2da9-2520-41d1-8807-d571532b3fb4",
//       title: "QUALITY ASSURANCE ENGINEER & DEVELOPER (SUMMER VACATIONER)",
//       company: "Telstra",
//       location: "NSW, Wollongong",
//       isCurrentJob: true,
//       startDate: "2020-03-15T00:00:00.000Z",
//       endDate: null,
//       responsibilities: `Performing discovery to identify client challenges & translating them into developmental tasks,
  
//   Delegating task, managing time-frames and client expectations for a team of 3 software developers following agile scrum methodology,
  
//   Frequent communication & collaboration with clients to deliver an effective solution for their business needs,
  
//   Creating web-applications with VueJS, NodeJS, Firebase and modern design styles
//         `,
//     },
  ],
  certificates: [
    {
      id: "da732612-db45-4ff6-ae52-e7b964368291",
      name: "Deans award",
      issuer: "University of Wollongong",
      issueDate: "2016-01-15T00:00:00.000Z",
      hasExpiryDate: true,
      expiryDate: "2018-01-15T00:00:00.000Z",
    },
    {
      id: "da732612-db45-4ff6-ae52-e7b964368292",
      name: "IT Professionalism award",
      issuer: "University of Wollongong",
      issueDate: "2019-01-15T00:00:00.000Z",
      hasExpiryDate: false,
      expiryDate: null,
    },
  ],
  skills: [
    "C# .NET Framework & .NET Core",
    "Vue, React & AngularJS",
    "Javascript / Typescript",
    "TSQL & NoSQL",
    "HTML5 & CSS",
  ],
  referenceType: REFERENCE_TYPE.UPON_REQUEST,
  references: [],
};

const getTestPersonalDetails = ({
  firstName,
  lastName,
  email,
  phone,
  positionTitle,
  country,
  address,
  state,
  city,
  zipCode,
  careerObjective,
}) => {
  return {
    firstName,
    lastName,
    email,
    phone,
    positionTitle,
    country,
    address,
    state,
    city,
    zipCode,
    careerObjective,
  };
};

const getTestReferenceDetails = (data) => {
  return { referenceType: data.referenceType, references: data.references };
};
const getTestExperience = (data) => {
  return data.experience;
};
const getTestEducation = (data) => {
  return data.education;
};
const getTestCertificates = (data) => {
  return data.certificates;
};
const getTestSkills = (data) => {
  return data.skills;
};

export default data;
export {
  getTestPersonalDetails,
  getTestReferenceDetails,
  getTestExperience,
  getTestEducation,
  getTestCertificates,
  getTestSkills,
};
