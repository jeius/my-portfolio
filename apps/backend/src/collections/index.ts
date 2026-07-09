import { CollectionConfig } from "payload";
import { Experiences } from "./Experiences";
import { Projects } from "./Projects";
import { SkillCategories } from "./SkillCategories";
import { Skills } from "./Skills";
import { Users } from "./Users";
import { files } from "./files";

export const collections: CollectionConfig[] = [...files, Users, Experiences, Projects, Skills, SkillCategories]