import { Skill, Social, Experience, PageInfo } from "../utils/typings";

export const fetchSkills = async () => {
  const res = await fetch(`http://localhost:3000/api/getSkills`);
  const data = await res.json();

  const skills: Skill[] = data.skills;

  return skills;
};

export const fetchSocials = async () => {
  const res = await fetch(`http://localhost:3000/api/getSocials`);
  const data = await res.json();

  const socials: Social[] = data.socials;

  return socials;
};

export const fetchExperience = async () => {
  const res = await fetch(`http://localhost:3000/api/getExperience`);
  const data = await res.json();

  const experience: Experience[] = data.experience;

  return experience;
};
export const fetchPageInfo = async () => {
  const res = await fetch(`http://localhost:3000/api/getPageInfo`);
  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
