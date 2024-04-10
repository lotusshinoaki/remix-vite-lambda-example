import { createRequestHandler } from "@remix-run/architect";
import * as build from "./build/server/index.js";

const handler = createRequestHandler({ build });

export { handler };
