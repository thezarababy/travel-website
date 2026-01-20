import { type SchemaTypeDefinition } from "sanity";
import { destination } from "./destination";
import { tip } from "./tips";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [destination, tip],
};
