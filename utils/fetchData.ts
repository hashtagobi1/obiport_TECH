import { PageInfo } from "./../typings.d";
import { Skill, Social, Experience } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(`http://localhost:3000/api/getSkills`);
  const data = await res.json();

  const skills: Skill[] = data.skills;

  // console.log("fetching", skills);

  return skills;
};

export const fetchSocials = async () => {
  const res = await fetch(`http://localhost:3000/api/getSocials`);
  const data = await res.json();

  const socials: Social[] = data.socials;

  // console.log("fetching", socials);

  return socials;
};

export const fetchExperience = async () => {
  const res = await fetch(`http://localhost:3000/api/getExperience`);
  const data = await res.json();

  const experience: Experience[] = data.experience;

  // console.log("fetching", experience);

  return experience;
};
export const fetchPageInfo = async () => {
  const res = await fetch(
    // `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`

    "http://localhost:3000/api/getPageInfo"
  );
  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  // console.log("fetching", pageInfo);

  return pageInfo;
};
