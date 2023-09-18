
import { SectionUi } from "./SectionUi";
export const SectionB = () => {
  return (
    <SectionUi         section="B"
    data={[
      { name: "HA", value: "Highly Available" },
      { name: "MA", value: "Moderately Available" },
      { name: "RA", value: "Rarely Available" },
      { name: "NA", value: "Not Available" },
    ]}
    title="Availability"/>
    // <>
    //   <article className={classes["article-b"]}>
    //     <div>
    //       <h5>Section B: </h5>{" "}
    //       <p>
    //         Availability of Instructional Materials for Teaching Mathematics
    //       </p>
    //     </div>
    //     <div>
    //       <h5>Direction: </h5>
    //       <p>
    //         Kindly tick () the column that is most applicable to indicate the
    //         extent to which you agree or disagree with that statement using
    //         format below. Please note that there is no right or wrong answer
    //       </p>
    //     </div>

    //     {[
    //       { name: "HA", value: "Highly Available" },
    //       { name: "MA", value: "Moderately Available" },
    //       { name: "RA", value: "Rarely Available" },
    //       { name: "NA", value: "Not Available" },
    //     ].map((a) => (
    //       <div key={a.name}>
    //         <h5>{a.name}</h5> - <p>{a.value}</p>
    //       </div>
    //     ))}
    //   </article>
    //   <section className={classes.section}>
    //     <div className={classes.questions}>
    //       {/* <h4>
    //         Availability of The following instructional materials for teaching
    //         mathematics
    //       </h4> */}
    //       {[
    //         "Calculator",
    //         "Counters",
    //         "Realia",
    //         "Mathematical games",
    //         "Textbooks",
    //         "Instructional charts",
    //         "Abacus",
    //         "Geometrical Models",
    //         "Computers",
    //         "Interactive white board",
    //         "Measuring instruments",
    //         "Mathematical set",
    //       ].map((question) => (
    //         <div className={classes.item}>
    //           <p>{question}</p>
    //           <div className={classes.answers}>
    //             {[
    //               { name: "HA", value: "Highly Available" },
    //               { name: "MA", value: "Moderately Available" },
    //               { name: "RA", value: "Rarely Available" },
    //               { name: "NA", value: "Not Available" },
    //             ].map((answer) => (
    //               <div>
    //                 <input
    //                   type="radio"
    //                   name="answer"
    //                   key={answer.value}
    //                   id={answer.value}
    //                 />
    //                 <label htmlFor={answer.value}>{answer.name}</label>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //       <div className="item"></div>
    //     </div>
    //   </section>
    // </>
  );
};
