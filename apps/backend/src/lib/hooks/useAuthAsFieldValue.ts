import { FieldHook, TypeWithID } from "payload";

export const useAuthAsFieldValue: FieldHook<TypeWithID, Number | null, TypeWithID> = async ({ req, value }) => {
  if (value && !isNaN(Number(value))) return value;
  return req.user?.id || null
}