import { Plugin } from "payload";
import { S3Config } from "./s3/config";
import { seoPluginConfig } from "./seo";

export const plugins: Plugin[] = [...S3Config, seoPluginConfig]