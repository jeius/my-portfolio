import { createPayloadHandler } from "@/lib/handlers/createPayloadHandler";
import { Endpoint } from "payload";
import { seedHandler } from "./handler";

export const SeederEndpoint: Endpoint = {
  method: 'get',
  path: '/seed',
  handler: createPayloadHandler({ requireAdmin: true, handler: seedHandler })
}