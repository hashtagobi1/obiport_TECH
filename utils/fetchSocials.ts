import { getEnvironment } from "./fetchConfig";
import { Social } from "./typings";

export const fetchSocials = async () => {
  const res = await fetch(`${getEnvironment()}/api/getSocials`);
  const data = await res.json();

  const socials: Social[] = data.socials;

  return socials;
};
