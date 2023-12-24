import { get } from "../utils";

export const getAllSingers = async () => {
  const data = await get("v1/singer");
  return data;
};

// export const getAllPendingSingers = async () => {
//   const data = await get();
//   return data;
// };
