import React from "react";
import "./StudentInfo.css";

const StudentInfo = () => {
  // Placeholder values; replace when you hook in real data.
  const gpa = "—";
  const credits = { done: 0, req: 60 };
  const target = "—";

  const pct = credits.req ? Math.min(100, Math.round((credits.done/credits.req)*100)) : 0;

  return (
    <section className="card">
      <div className="card-h">Student Snapshot</div>
      <div className="card-b">
        <div className="row">
          <div className="stat">
            <div className="label">GPA</div>
            <div className="value">{gpa}</div>
          </div>
          <div className="stat">
            <div className="label">Credits Completed</div>
            <div className="value">{credits.done} / {credits.req}</div>
            <div style={{height:8,background:"var(--panel-2)",border:"1px solid var(--line)",borderRadius:999,overflow:"hidden"}}>
              <div style={{width:`${pct}%`,height:"100%", background:"var(--accent)"}}/>
            </div>
          </div>
          <div className="stat">
            <div className="label">Target</div>
            <div className="value">{target}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentInfo;
