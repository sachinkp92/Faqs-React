import "./index.css";
import { useState } from "react";
import React from "react";

const PLUS_IMAGE =
  "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png";
const MINUS_IMAGE =
  "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png";

const FaqItems = ({ faqDetails }) => {
  let { questionText, answerText } = faqDetails;
  let [isActive, setIsActive] = useState(false);

  const onToggleClick = () => {
    setIsActive(!isActive);
  };

  const renderAnswer = () => {
    if (isActive) {
      return (
        <div>
          <div className="horizontal-line"></div>
          <p className="answer">{answerText}</p>
        </div>
      );
    }
  };

  const image = isActive ? MINUS_IMAGE : PLUS_IMAGE;
  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button onClick={onToggleClick} className="btn">
          <img src={image} alt="logo" />
        </button>
      </div>
      {renderAnswer()}
    </li>
  );
};

export default FaqItems;
