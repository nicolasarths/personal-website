import locals from "./locals";
import profiles from "./profiles";
import repositories from "./repositories";

export const homepage = "/";
export const projectsPage = "/dev/desenvolver";
export const developerPage = "/dev/desenvolver";
export const successfulContactPage = "/contato/sucesso";

const hrefs = {
  ...locals,
  ...profiles,
  ...repositories,
  WHATSAPP_BASE: "https://wa.me/51984376635",
};

export default hrefs;
