import {
  DevelopPageContact,
  DevelopPageComponents,
  DevelopPageHeader,
  DevelopPageAttention,
  DevelopPageOrganize,
} from "components/DevelopPage";
import Section from "components/Section";

const DevelopPage = () => {
  return (
    <div className="develop-page">
      <DevelopPageHeader />
      <Section color="#eda" textColor="var(--background-color)">
        <p className="lets-explore">Vamos explorar algumas possibilidades?</p>
      </Section>
      <DevelopPageComponents />
      <DevelopPageAttention />
      <DevelopPageOrganize />
      <DevelopPageContact />
    </div>
  );
};

export default DevelopPage;
