import React from "react";
import PageBreakableContainer from "../PageBreakableContainer";

function Contact({ email, phone, website, address }) {
  return (
    <section>
      <PageBreakableContainer>
        <div className="icon-row">
          <span className="icon-svg">
            <svg
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
            >
              <path d="m467 61h-422c-6.927 0-13.412 1.703-19.279 4.51l229.28 229.28 51.389-49.387s4e-3 -5e-3 5e-3 -7e-3 5e-3 -4e-3 5e-3 -4e-3l179.89-179.88c-5.868-2.809-12.357-4.514-19.286-4.514z"></path>
              <path d="m507.5 86.728-169.28 169.27 169.28 169.28c2.807-5.867 4.51-12.352 4.51-19.279v-300c0-6.923-1.699-13.407-4.504-19.272z"></path>
              <path d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z"></path>
              <path d="m317 277.21-51.396 49.393c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395l-49.396-49.395-169.29 169.28c5.868 2.809 12.357 4.514 19.286 4.514h422c6.927 0 13.412-1.703 19.279-4.51l-169.28-169.28z"></path>
            </svg>
          </span>
          <span className="icon-text">{email}</span>
        </div>
        <div className="icon-row">
          <span className="icon-svg">
            <svg
              enableBackground="new 0 0 405.333 405.333"
              version="1.1"
              viewBox="0 0 405.33 405.33"
            >
              <path d="m373.33 266.88c-25.003 0-49.493-3.904-72.704-11.563-11.328-3.904-24.192-0.896-31.637 6.699l-46.016 34.752c-52.8-28.181-86.592-61.952-114.39-114.37l33.813-44.928c8.512-8.512 11.563-20.971 7.915-32.64-7.723-23.36-11.648-47.872-11.648-72.832 0-17.643-14.357-32-32-32h-74.667c-17.643 0-32 14.357-32 32 0 205.84 167.49 373.33 373.33 373.33 17.643 0 32-14.357 32-32v-74.453c0-17.643-14.357-32-32-32z"></path>
            </svg>
          </span>
          <span className="icon-text">{phone}</span>
        </div>

        {website?.length > 0 ? (
          <div className="icon-row">
            <span className="icon-svg">
              <svg
                enableBackground="new 0 0 405.333 405.333"
                version="1.1"
                viewBox="0 0 405.33 405.33"
              >
                <path d="m321.324219 83.367188c-12.8125-33.246094-28.917969-61.246094-47.425781-82.714844-6.078126-.429688-12.195313-.652344-18.34375-.652344-6.152344 0-12.269532.222656-18.34375.652344-18.511719 21.46875-34.617188 49.464844-47.425782 82.714844-4.136718 10.734374-7.855468 21.863281-11.15625 33.316406h153.851563c-3.304688-11.453125-7.023438-22.582032-11.15625-33.316406zm0 0" />
                <path d="m171.101562 365.316406h168.902344c6.457032-30.007812 10.207032-61.765625 11.089844-94.316406h-191.082031c.882812 32.554688 4.632812 64.308594 11.089843 94.316406zm0 0" />
                <path d="m340.003906 146.683594h-168.902344c-6.457031 30.007812-10.207031 61.765625-11.089843 94.316406h191.082031c-.882812-32.554688-4.632812-64.308594-11.089844-94.316406zm0 0" />
                <path d="m189.78125 428.632812c12.8125 33.246094 28.917969 61.246094 47.425781 82.714844 6.078125.429688 12.195313.652344 18.347657.652344 6.148437 0 12.265624-.222656 18.34375-.652344 18.507812-21.46875 34.613281-49.464844 47.421874-82.714844 4.136719-10.734374 7.855469-21.863281 11.15625-33.316406h-153.847656c3.300782 11.453125 7.019532 22.582032 11.152344 33.316406zm0 0" />
                <path d="m370.59375 146.683594c6.050781 29.953125 9.660156 61.664062 10.507812 94.316406h130.003907c-1.898438-33.089844-10.054688-65-23.929688-94.339844-.144531.003906-.285156.023438-.429687.023438zm0 0" />
                <path d="m140.515625 365.316406c-6.054687-29.953125-9.664063-61.664062-10.511719-94.316406h-130.003906c1.898438 33.089844 10.054688 65 23.929688 94.339844.144531-.003906.285156-.023438.429687-.023438zm0 0" />
                <path d="m363.554688 395.316406c-11.167969 41.644532-27.277344 78.976563-47.363282 109.484375 45.199219-10.929687 86.664063-34.066406 120.378906-67.78125 12.847657-12.847656 24.144532-26.828125 33.832032-41.703125zm0 0" />
                <path d="m147.550781 116.683594c11.171875-41.644532 27.277344-78.976563 47.363281-109.484375-45.195312 10.929687-86.664062 34.066406-120.382812 67.78125-12.84375 12.847656-24.140625 26.828125-33.828125 41.703125zm0 0" />
                <path d="m147.550781 395.316406h-106.847656c9.6875 14.875 20.984375 28.855469 33.828125 41.703125 33.71875 33.714844 75.183594 56.851563 120.378906 67.78125-20.082031-30.507812-36.1875-67.839843-47.359375-109.484375zm0 0" />
                <path d="m363.554688 116.683594h106.847656c-9.6875-14.875-20.980469-28.855469-33.828125-41.703125-33.71875-33.714844-75.183594-56.851563-120.382813-67.78125 20.085938 30.507812 36.195313 67.839843 47.363282 109.484375zm0 0" />
                <path d="m381.101562 271c-.847656 32.652344-4.453124 64.363281-10.507812 94.316406h116.152344c.144531 0 .285156.019532.429687.023438 13.875-29.339844 22.03125-61.25 23.929688-94.339844zm0 0" />
                <path d="m130.003906 241c.847656-32.652344 4.457032-64.363281 10.511719-94.316406h-116.15625c-.144531 0-.285156-.019532-.429687-.023438-13.875 29.339844-22.03125 61.25-23.929688 94.339844zm0 0" />
              </svg>
            </span>
            <span className="icon-text">{website}</span>
          </div>
        ) : null}

        <div className="icon-row">
          <span className="icon-svg">
            <svg width="8px" height="11px" viewBox="0 0 8 11">
              <path
                fill="#000"
                d="M4.098 6.318c-1.02 0-1.85-.83-1.85-1.85s.83-1.85 1.85-1.85 1.85.83 1.85 1.85-.83 1.85-1.85 1.85zm0-5.528A3.682 3.682 0 0 0 .42 4.468c0 2.517 3.291 6.211 3.431 6.367a.331.331 0 0 0 .493 0c.14-.156 3.432-3.85 3.432-6.367A3.682 3.682 0 0 0 4.098.79z"
              ></path>
            </svg>
          </span>
          <span className="icon-text">{address}</span>
        </div>
      </PageBreakableContainer>
    </section>
  );
}

export default Contact;
