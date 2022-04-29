# [ResuMaTe]((https://resumate.project-jtp.dev))
![ResuMate logo](src/Icon/logo-black-no-border.svg)

Want a customisable resume that will make you stand out from the rest? Well **ResuMaTe** is for you. Free to use and with a growing selection of resume templates to choose from. Get started [here](https://resumate.project-jtp.dev). 


## Motivation 
This project started because I needed to update my resume and give it more of a modern look. Initially, I tried to use free resume builders online, but I wanted to personalise and customise more. Additionally, I was getting more familiar with react because of my other projects, but, I have never created a react project from scratch (without create-react-app). Thus, I thought it would be fun to start this project. Key focus areas of this app are Webpack, Babel, Typescript, SVG, React (Hooks, Context & Reducers) & Design with MaterialUI library, HTML and SCSS. 

## Status 
In progress

## Features 
- Generate resume pdf ✔️
- User account creation ✔️
- Pre-populate resume information ✔️
- Easy to use previewer 
- Email resume 
- Select different invoice templates 
- Customise invoice colors
- Matching cover letter templates


## Tech/framework used 
- Frontend: Typescript, React, HTML, SCSS

- Frontend Tooling: Webpack & Babel

- Design Libraries: MaterialUI

- Database: Cloud Firestore 

- Backend: Firebase Functions (NodeJS) 

- PDF Generation: Puppeteer 

## Code Style
Moving forward will be using the following style
1. Grouping files by module/feature. 

        src

          └─ SignIn

            ├─ Page.tsx

            ├─ Button.tsx

            └─ sign-in.scss
 
     
2. Shared folder for commonly used functions or interfaces. 

        src

          └─ Functions

            └─ UseStateHelper.ts
            
          └─ Interfaces

            └─ Certifcate.interface.ts
  
3. File names that are *.ts or *.tsx are capitalised with the exception of index.ts, everything else lowercase and words separated wth '-'.
