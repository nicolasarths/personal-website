import {
  DevelopPageContact,
  DevelopPageComponents,
  DevelopPageHeader,
  DevelopPageAttention,
  DevelopPageOrganize
} from "components/DevelopPage";

const DevelopPage = () => {
  return (
    <>
      <DevelopPageHeader />
      <DevelopPageComponents />
      <DevelopPageAttention />
      <DevelopPageOrganize />
      <DevelopPageContact />
    </>
  );
};

export default DevelopPage;
