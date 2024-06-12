import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
