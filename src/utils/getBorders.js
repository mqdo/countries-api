import { useCallApi } from "../hooks";

export default async function getBorders(borders) {
  const str = borders?.slice(1,).reduce((acc, curr) => acc + ',' + curr, borders[0]);
  const data = await useCallApi('alpha?codes=' + str);
  return data;
}