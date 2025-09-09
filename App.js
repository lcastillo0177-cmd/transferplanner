import React from "react";
import "./App.css";
import SchoolSelection from "./components/SchoolSelection";
import StudentInfo from "./components/StudentInfo";
import EquivalentCourses from "./components/EquivalentCourses";
import EducationalPlan from "./components/EducationalPlan";

function App(){
  return (
    <div className="App">
      {/* Sidebar (visual only) */}
      <aside className="sidebar">
        <div className="brand">
          <span className="dot" />
          <span>Transfer Planner</span>
        </div>
        <nav className="nav">
          <a href="#dest" className="active">Destination</a>
          <a href="#snapshot">Student Snapshot</a>
          <a href="#equiv">Equivalent Courses</a>
          <a href="#plan">Educational Plan</a>
        </nav>
      </aside>

      {/* Main */}
      <div className="main">
        <header className="App-header">
          <h1>Chaffey College Transfer Planner</h1>
        </header>

        <main className="App-main">
          <section id="dest" className="card full">
            <div className="card-h">Select Transfer Destination</div>
            <div className="card-b">
              {/* keep your 2-step dropdown component */}
              <SchoolSelection />
            </div>
          </section>

          <section id="snapshot" className="card">
            <div className="card-h">Student Snapshot</div>
            <div className="card-b">
              <StudentInfo />
            </div>
          </section>

          <section id="equiv" className="card">
            <div className="card-h">Equivalent Courses</div>
            <div className="card-b">
              <EquivalentCourses />
            </div>
          </section>

          <section id="plan" className="card full">
            <div className="card-h">Educational Plan</div>
            <div className="card-b">
              <EducationalPlan />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default App;
