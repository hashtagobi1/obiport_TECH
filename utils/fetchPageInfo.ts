import { getEnvironment } from "./fetchConfig";
import { PageInfo } from "./typings";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getPageInfo`);
  const data = await res.json();

  console.log({ data });
  const pageInfo: PageInfo = data.pageInfo;
  console.log({ pageInfo });

  return pageInfo;
};
