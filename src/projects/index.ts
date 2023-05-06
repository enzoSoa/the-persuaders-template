import * as demo from './demo.json';
import {Persona} from "../ThePersuaders";
import {VerticalScenePart} from "../scenes/VerticalPictures/VerticalPictures";

type Project = {
  leftPersona: Persona;
  rightPersona: Persona;
  parts: VerticalScenePart[];
}

type ProjectCatalog = Record<string, Project>

export const projects = {demo} as ProjectCatalog;