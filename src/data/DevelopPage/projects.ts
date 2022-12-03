import Monteiro from "./Monteiro";
import PersonalWebsite from "./PersonalWebsite";
import Organo from "./Organo";

import { StaticImageData } from "next/future/image";

export interface IProject {
  title: string;
  href: string;
  imageSrc: StaticImageData;
  description: string;
  imageAlt: string;
  features: string[];
  githubRepository: string;
}

const projects = [Monteiro, Organo, PersonalWebsite];

export default projects;
