interface SanityBody {
  _createdAt?: Date;
  _id: string;
  _rev?: string;
  _updatedAt?: Date;
}

export interface Social extends SanityBody {
  _type?: "social";
  title?: string;
  url?: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  typeWriterText?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
  role?: string;
  profilePic?: Image;
  heroImage?: Image;
  address?: string;
  about?: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image?: Image;
  yearsExperience?: string;
  title?: string;
}
export interface Skill extends SanityBody {
  _type?: "skill";
  image?: Image;
  yearsExperience?: string;
  title?: string;
}
export interface Project extends SanityBody {
  _type?: "project";
  title?: string;
  technologies?: Technology[];
  image?: Image;
  linkToBuild: string;
  summary: string;
}
export interface Experience extends SanityBody {
  _type: "experience";
  company?: string;
  link: string;
  isCurrentlyWorkingHere?: boolean;
  companyImage?: Image;
  dateStarted?: Date;
  dateEnded?: Date;
  jobTitle?: string;
  technologies?: Technology[];
  points?: string[];
  order?: number;
}
