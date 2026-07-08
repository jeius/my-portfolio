import { CollectionConfig } from "payload";
import { Users } from "./Users";
import { files } from "./files";
import { Experiences } from "./Experiences";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const collections: CollectionConfig[] = [...files, Users, Experiences, Projects, Skills]