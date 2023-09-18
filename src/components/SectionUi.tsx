import classes from "./SectionUi.module.css";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
interface InputItem {
  id: string;
  value: string;
  question: string;
}

export const SectionUi: React.FC<{
  section: string;
  title: string;
  data: { name: string; value: string }[];
}> = ({ section, data, title }) => {
  const [input, setInput] = useState<InputItem[]>(() => {
    // Initialize the input array from local storage or with an empty array if no data exists
    const storedInput = localStorage.getItem("input");
    return storedInput
      ? JSON.parse(storedInput)
      : [{ value: "", question: "" }];
  });
  const id = uuid();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, q: string) => {
    console.log(e.target.checked);
    setInput([...input, { id, value: e.target.value, question: q }]);
    // localStorage.setItem("data", JSON.stringify(input));
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(input));
  }, [input]);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setInput([{ id: "", value: "", question: "" }]);
  };
  return (
    <>
      <article className={classes["article-b"]}>
        <div>
          <h5>Section {section}: </h5>{" "}
          <p>{title} of Instructional Materials for Teaching Mathematics</p>
        </div>
        <div>
          <h5>Direction: </h5>
          <p>
            Kindly tick () the column that is most applicable to indicate the
            extent to which you agree or disagree with that statement using
            format below. Please note that there is no right or wrong answer
          </p>
        </div>

        {data.map((a) => (
          <div key={a.name}>
            <h5>{a.name}</h5> - <p>{a.value}</p>
          </div>
        ))}
      </article>
      <section className={classes.section}>
        <form onSubmit={(e) => submitHandler(e)} className={classes.questions}>
          {[
            "Calculator",
            "Counters",
            "Realia",
            "Mathematical games",
            "Textbooks",
            "Instructional charts",
            "Abacus",
            "Geometrical Models",
            "Computers",
            "Interactive white board",
            "Measuring instruments",
            "Graph board and sheet",
            "Construction/drawing instruments",
            "Mathematical set",
            "Chalkboard",
          ].map((question, index) => (
            <div className={classes.item}>
              <p>
                {index + 1}.{question}
              </p>
              <div className={classes.answers}>
                {data.map((answer) => (
                  <div>
                    <input
                      type="radio"
                      name={question}
                      key={answer.value}
                      id={answer.value}
                      required
                      value={answer.name}
                      onChange={(e) => inputHandler(e, question)}
                    />
                    <label htmlFor={answer.value}>{answer.name}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="item">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
