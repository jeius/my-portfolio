import { CollectionConfig } from "payload";
import { Users } from "./Users";
import { files } from "./files";

export const collections: CollectionConfig[] = [...files, Users]