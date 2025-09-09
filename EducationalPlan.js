import React, { useState } from "react";
import "./EducationalPlan.css";

const EducationalPlan = () => {
  const [terms, setTerms] = useState([{ name:"", courses:[""] }]);

  const addTerm = () => setTerms([...terms, { name:"", courses:[""] }]);
  const addCourse = (ti) => {
    const copy=[...terms]; copy[ti].courses.push(""); setTerms(copy);
  };
  const setTermName = (i, v) => { const c=[...terms]; c[i].name=v; setTerms(c); };
  const setCourse = (ti, ci, v) => { const c=[...terms]; c[ti].courses[ci]=v; setTerms(c); };

  return (
    <section className="card">
      <div className="card-h">Educational Plan</div>
      <div className="card-b">
        <div className="row" style={{alignItems:"stretch"}}>
          {terms.map((t, ti)=>(
            <div key={ti} className="term" style={{flex:"1 1 260px"}}>
              <div className="pill">Semester</div>
              <input
                className="input"
                placeholder="e.g., Fall 2025"
                value={t.name}
                onChange={e=>setTermName(ti, e.target.value)}
                style={{marginBottom:10}}
              />
              <h4>Courses</h4>
              {t.courses.map((c, ci)=>(
                <div className="course" key={ci}>
                  <input
                    className="input"
                    placeholder="e.g., PHYS 45"
                    value={c}
                    onChange={e=>setCourse(ti, ci, e.target.value)}
                  />
                </div>
              ))}
              <button className="btn" onClick={()=>addCourse(ti)}>Add Course</button>
            </div>
          ))}
        </div>

        <div style={{marginTop:16}}>
          <button className="btn" onClick={addTerm}>Add Semester</button>
        </div>
      </div>
    </section>
  );
};

export default EducationalPlan;
