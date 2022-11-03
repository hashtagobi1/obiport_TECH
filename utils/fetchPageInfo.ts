import { getEnvironment } from "./fetchConfig";
import { PageInfo } from "./typings";

export const fetchPageInfo = async () => {
  const res = await fetch(`${getEnvironment()}/api/getPageInfo`);
  const data = await res.json();

  console.log({ data });
  const pageInfo: PageInfo = data.pageInfo;
  console.log({ pageInfo });

  return pageInfo;
};
