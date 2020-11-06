
import React from "react";

function Contact({ email, phone, address, city, state, zipCode }) {
  return (
    <div className="section ">
      <div className="paragraph ">
        <div>
          <div className="iconRow">
            <div className="iconSvg">
              <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512">
                <path
                  d="m467 61h-422c-6.927 0-13.412 1.703-19.279 4.51l229.28 229.28 51.389-49.387s4e-3 -5e-3 5e-3 -7e-3 5e-3 -4e-3 5e-3 -4e-3l179.89-179.88c-5.868-2.809-12.357-4.514-19.286-4.514z">
                </path>
                <path
                  d="m507.5 86.728-169.28 169.27 169.28 169.28c2.807-5.867 4.51-12.352 4.51-19.279v-300c0-6.923-1.699-13.407-4.504-19.272z">
                </path>
                <path
                  d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z">
                </path>
                <path
                  d="m317 277.21-51.396 49.393c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395l-49.396-49.395-169.29 169.28c5.868 2.809 12.357 4.514 19.286 4.514h422c6.927 0 13.412-1.703 19.279-4.51l-169.28-169.28z">
                </path>
              </svg>
            </div>
            <div className="icoTxt">
              <span className="emailText">{email}</span>
            </div>
          </div>
          <div className="iconRow">
            <div className="iconSvg">
              <svg enableBackground="new 0 0 405.333 405.333" version="1.1" viewBox="0 0 405.33 405.33">
                <path
                  d="m373.33 266.88c-25.003 0-49.493-3.904-72.704-11.563-11.328-3.904-24.192-0.896-31.637 6.699l-46.016 34.752c-52.8-28.181-86.592-61.952-114.39-114.37l33.813-44.928c8.512-8.512 11.563-20.971 7.915-32.64-7.723-23.36-11.648-47.872-11.648-72.832 0-17.643-14.357-32-32-32h-74.667c-17.643 0-32 14.357-32 32 0 205.84 167.49 373.33 373.33 373.33 17.643 0 32-14.357 32-32v-74.453c0-17.643-14.357-32-32-32z">
                </path>
              </svg>
            </div>
            <div className="icoTxt">
              <span className="">{phone}</span>
            </div>
          </div>
          <div className="iconRow">
            <div className="iconSvg">
              <svg width="8px" height="11px" viewBox="0 0 8 11">
                <path fill="#000"
                  d="M4.098 6.318c-1.02 0-1.85-.83-1.85-1.85s.83-1.85 1.85-1.85 1.85.83 1.85 1.85-.83 1.85-1.85 1.85zm0-5.528A3.682 3.682 0 0 0 .42 4.468c0 2.517 3.291 6.211 3.431 6.367a.331.331 0 0 0 .493 0c.14-.156 3.432-3.85 3.432-6.367A3.682 3.682 0 0 0 4.098.79z">
                </path>
              </svg>
            </div>
            <div className="icoTxt">
              <span className="">{address}, {city}, {state}, {zipCode}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;