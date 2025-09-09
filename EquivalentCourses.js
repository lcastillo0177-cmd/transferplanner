import React, { useState } from "react";
import "./EquivalentCourses.css";

const EquivalentCourses = () => {
  const [rows, setRows] = useState([{ chaffey:"", target:"", done:false }]);

  const addRow = () => setRows([...rows, { chaffey:"", target:"", done:false }]);
  const set = (i, k, v) => {
    const copy = [...rows]; copy[i][k] = v; setRows(copy);
  };

  return (
    <section className="card">
      <div className="card-h">Equivalent Courses</div>
      <div className="card-b">
        <div className="grid-3">
          <div className="th">Chaffey Course</div>
          <div className="th">Target School Equivalent</div>
          <div className="th">Status</div>

          {rows.map((r, i)=>(
            <div className="row" key={i}>
              <input
                className="input"
                placeholder="e.g., MATH-25"
                value={r.chaffey}
                onChange={e=>set(i,"chaffey",e.target.value)}
              />
              <input
                className="input"
                placeholder="e.g., MATH 20B"
                value={r.target}
                onChange={e=>set(i,"target",e.target.value)}
              />
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span className={`dot ${r.done ? "ok":"warn"}`} />
                <label style={{color:"var(--muted)", fontSize:".92rem"}}>
                  <input
                    type="checkbox"
                    checked={r.done}
                    onChange={e=>set(i,"done",e.target.checked)}
                    style={{marginRight:8}}
                  />
                  {r.done ? "Completed" : "Planned"}
                </label>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:16}}>
          <button className="btn" onClick={addRow}>Add Course</button>
        </div>
      </div>
    </section>
  );
};

export default EquivalentCourses;
