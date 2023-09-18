import classes from "./Main.module.css";
import { SectionB } from "./SectionB";
import { SectionC } from "./SectionC";
import { useState } from "react";
export const Main = () => {
  const [tab, setTab] = useState<string>("section-B");
  const tabHandler = (e: string) => {
    setTab(e);
  };
  return (
    <main className={classes.main}>
      <div className={classes["demographic-data"]}>
        <form className={classes["div-form"]}>
          <h2>Section A</h2>
          <div className={classes["gender-form"]}>
            <h3>Gender:</h3>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div className={classes["teaching-experiences-form"]}>
            <h3>Teaching Experiences:</h3>
            <input type="radio" name="years" id="1-5years" />
            <label htmlFor="1-5years">1 - 5 years</label>
            <input type="radio" name="years" id="6-10years" />
            <label htmlFor="6-10years">6 - 10 years</label>
            <input type="radio" name="years" id="11years+" />
            <label htmlFor="11years+">11 years and above</label>
          </div>
          <div className={classes["educational-qualifications-form"]}>
            <h3>Educational Qualifications:</h3>
            <input type="radio" name="qualifications" id="NCE" />
            <label htmlFor="NCE">NCE</label>
            <input type="radio" name="qualifications" id="bachelor-degree" />
            <label htmlFor="bachelor-degree">BSc/B.Ed/BSc(ed)</label>
            <input type="radio" name="qualifications" id="postgraduate" />
            <label htmlFor="postgraduate">Postgraduate</label>
          </div>
        </form>
      </div>
      <div className={classes.tab}>
        <div
          className={tab === "section-B" ? classes.active : ""}
          onClick={() => tabHandler("section-B")}
        >
          Section B
        </div>
        <div
          className={tab === "section-C" ? classes.active : ""}
          onClick={() => tabHandler("section-C")}
        >
          Section C
        </div>
      </div>
      {tab === "section-B" && <SectionB />}
      {tab === "section-C" && <SectionC />}
    </main>
  );
};
