import React, { useState, useMemo } from "react";
import "./SchoolSelection.css";

const SchoolSelection = () => {
  const [system, setSystem] = useState("");
  const [school, setSchool]   = useState("");

  // You can replace these with your loaded datasets later.
  const catalog = {
    UC: ["UCLA","UC San Diego","UC Irvine","UC Riverside"],
    CSU:["Cal Poly Pomona","CSU Fullerton","CSU Long Beach","CSU San Bernardino"],
    Private:["USC","Pepperdine","Redlands"]
  };

  const schools = useMemo(() => (system ? catalog[system] : []), [system]);

  return (
    <section className="card">
      <div className="card-h">Select Transfer Destination</div>
      <div className="card-b">
        <div className="row">
          <select
            className="select"
            value={system}
            onChange={(e)=>{ setSystem(e.target.value); setSchool(""); }}
          >
            <option value="">Choose System…</option>
            <option value="UC">University of California (UC)</option>
            <option value="CSU">California State University (CSU)</option>
            <option value="Private">Private (CA)</option>
          </select>

          <select
            className="select"
            value={school}
            onChange={(e)=>setSchool(e.target.value)}
            disabled={!system}
          >
            <option value="">
              {system ? "Choose School…" : "Select a system first"}
            </option>
            {schools.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
    </section>
  );
};

export default SchoolSelection;
