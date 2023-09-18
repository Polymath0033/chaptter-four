import { SectionUi } from "./SectionUi";
export const SectionC = () => {
  return (
    <SectionUi
      section="C"
      data={[
        { name: "HU", value: "Highly Utilized" },
        { name: "MU", value: "Moderately Utilized" },
        { name: "RU", value: "Rarely Utilized" },
        { name: "NU", value: "Not Utilized" },
      ]}
      title="Utilization"
    />
  );
};
