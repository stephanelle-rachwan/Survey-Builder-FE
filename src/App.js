import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Nav />
      <Login />
      <section className="surveys-displayed">
        <h1 className="survey-title">List of Surveys</h1>
        <p className="survey-name">Survey Name 1</p>
        <p className="survey-name">Survey Name 2</p>
        <p className="survey-name">Survey Name 3</p>
        <p className="survey-name">Survey Name 5</p>
        <p className="survey-name">Survey Name 6</p>
        <p className="survey-name">Survey Name 7</p>
        <p className="survey-name">Survey Name 8</p>
      </section>
      <section className="survey-q">
        <h1 className="survey-title">Survey Name</h1>
        <p className="question">
          <div className="question-txt">
            <span className="colored">Question 1: </span> select one of the
            radio buttons
          </div>
          <div>
            <input className="radio" type="radio" value="Male" name="gender" />
            Male <br />
            <input
              className="radio"
              type="radio"
              value="Female"
              name="gender"
            />
            Female <br />
            <input className="radio" type="radio" value="Other" name="gender" />
            Other
          </div>
        </p>
        <p className="question">
          <div className="question-txt">
            <span className="colored">Question 2: </span> select multiple
            chexkboxes:
          </div>
          <div>
            <input
              className="checkbox"
              type="checkbox"
              value="Male"
              name="gender"
            />
            Male <br />
            <input
              className="checkbox"
              type="checkbox"
              value="Female"
              name="gender"
            />
            Female <br />
            <input
              className="checkbox"
              type="checkbox"
              value="Other"
              name="gender"
            />
            Other
          </div>
        </p>
        <p className="question">
          <div className="question-txt">
            <span className="colored">Question 3: </span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Commodi, quod.
          </div>
          <div>
            <textarea
              cols="5"
              rows="5"
              placeholder="Enter your answer here"
            ></textarea>
          </div>
        </p>
        <p className="question">
          <div className="question-txt">
            <span className="colored">Question 4: </span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Commodi, quod.
          </div>
          <div>
            <input
              className="email-input"
              type="email"
              placeholder="Enter email"
              required
            ></input>
          </div>
        </p>
        <p className="question">
          <div className="question-txt">
            <span className="colored">Question 5: </span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Commodi, quod.
          </div>
          <div>
            <select className="select-menu">
              <option value="" disabled selected>
                Select your option
              </option>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
        </p>
        <p className="question">
          <div className="question-txt">
            <span className="colored">Question 6: </span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Commodi, quod.
          </div>
          <div>
            <ul className="likert">
              <li> Not Guilty </li>
              <li>
                <input type="radio" name="guilty" value="1" />
              </li>
              <li>
                <input type="radio" name="guilty" value="2" />
              </li>
              <li>
                <input type="radio" name="guilty" value="3" />
              </li>
              <li>
                <input type="radio" name="guilty" value="4" />
              </li>
              <li>
                <input type="radio" name="guilty" value="5" />
              </li>
              <li> Very Guilty </li>
            </ul>
          </div>
        </p>
        <p className="question">
          <div className="question-txt">
            <span className="colored">Question 7: </span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Commodi, quod.
          </div>
          <div>
            <input className="radio" type="radio" value="yes" name="boolean" />
            Yes <br />
            <input className="radio" type="radio" value="no" name="boolean" />
            No <br />
          </div>
        </p>
        <div className="flex-btn">
          <button type="button" className="submit-btn">
            Submit
          </button>
        </div>
      </section>
      <section className="add-survey">
        <button className="add-btn">Create a new survey</button>
      </section>
      <section className="add-questions">
        <p className="filling">
          <h1 className="question-txt">Survey Title:</h1>
          <input
            className="title-input"
            type="text"
            placeholder="Enter survey title"
            required
          ></input>
        </p>
        <p className="filling">
          <h1 className="question-txt">How many questions do you want?</h1>
          <input
            className="number-input"
            type="number"
            placeholder="Enter # of questions"
            required
          ></input>
        </p>
        <p className="filling">
          <h1 className="question-txt">Choose your question type: </h1>
          <select className="type-input">
            <option value="" disabled selected>
              Select your question type
            </option>
            <option value="radio">Radio Button</option>
            <option value="checkbox">Checkbox</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="dropdown">Dropdown</option>
            <option value="linear_scale">Linear Scale</option>
          </select>
        </p>
        <p className="filling">
          <h1 className="question-txt">Enter your question: </h1>
          <input
            className="question-input"
            type="text"
            placeholder="Question here"
            required
          ></input>
        </p>
        <p className="filling">
          <h1 className="question-txt">
            How many choices do you want your question to have?{" "}
          </h1>
          <input
            className="numberChoices-input"
            type="number"
            placeholder="Enter # of choices"
            required
          ></input>
        </p>
        <p className="filling">
          <h1 className="question-txt">Choices: </h1>
          <input
            className="choices-input"
            type="text"
            placeholder="Enter choice"
            required
          ></input>
        </p>
        <div className="flex-btn">
          <button type="button" className="submit-btn">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
