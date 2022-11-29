export const getEnvironment = () => {
  let BASE_URL: string;
  if (process.env.NODE_ENV === "development") {
    BASE_URL = "http://localhost:3000";
  } else {
    BASE_URL = "https://testy-hashtagobi1.vercel.app";
  }

  return BASE_URL;
};
