import locals from "./locals"
import profiles from "./profiles"

export const homepage = "/";
export const projectsPage = "/dev/desenvolver";
export const developerPage = "/dev/desenvolver";
export const successfulContactPage = "/contato/sucesso";

const hrefs = {
    ...locals,
    ...profiles,
}

export default hrefs;