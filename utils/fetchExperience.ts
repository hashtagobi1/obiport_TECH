import { getEnvironment } from "./fetchConfig";
import { Experience } from "./typings";

export const fetchExperience = async () => {
  const res = await fetch(`${getEnvironment()}/api/getExperience`);
  const data = await res.json();

  const experience: Experience[] = data.experience;

  return experience;
};
