import "./App.css";
import FaqItems from "./components/FaqItems";

const faqsList = [
  {
    id: 0,
    questionText: "What is HTML?",
    answerText:
      "Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications.",
  },
  {
    id: 1,
    questionText: "What is CSS?",
    answerText:
      "CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. ",
  },
  {
    id: 2,
    questionText: "What is JavaScript?",
    answerText:
      "JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions.",
  },
  {
    id: 3,
    questionText: "What is React?",
    answerText:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
];

function App() {
  return (
    <>
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map((eachItem) => (
              <FaqItems faqDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
