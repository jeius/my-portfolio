import { Roles } from "@jeius-portfolio/enums";
import { Access } from "payload";

export const admin: Access = ({req}) => {
  const { user } = req

  if (!user) return false;

  return {
    role: { equals: Roles.ADMIN.value }
  }
}
