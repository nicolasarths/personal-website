import Monteiro from "./Monteiro";
import PersonalWebsite from "./PersonalWebsite";
import Organo from "./Organo";

import { StaticImageData } from "next/future/image";

type MultipleLanguages = {
  ptBr: string;
  en: string;
};

export interface IProject {
  id: string;
  title: MultipleLanguages;
  href: string;
  localHref: string;
  src: StaticImageData;
  description: MultipleLanguages;
  alt: string;
  features: string[];
  github: string;
}

const projects = [PersonalWebsite, Monteiro, Organo];

export default projects;
