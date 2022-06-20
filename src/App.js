import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import DisplaySurvey from "./components/DisplaySurvey";
import SurveyQuestions from "./components/SurveyQuestions";
import AddSurvey from "./components/AddSurvey";
import AddQuestions from "./components/AddQuestions";

function App() {
  return (
    // <div>
    //   <Nav />
    //   <Login />
    //   {/* <DisplaySurvey /> */}
    //   {/* <SurveyQuestions /> */}
    //   {/* <AddSurvey /> */}
    //   {/* <AddQuestions /> */}
    // </div>

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <DisplaySurvey />
            </>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Add_Survey" element={<AddSurvey />}></Route>
        <Route path="/Add_Questions" element={<AddQuestions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
