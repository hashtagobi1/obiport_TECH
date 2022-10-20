import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="shadow-xl max-w-7xl flex items-start justify-between mx-auto  xl:items-center p-5 ">
      <div className="flex space-x-5">
        <Link
          className=""
          passHref
          href={"https://www.linkedin.com/in/obinna-anokwuru-647231149/"}
        >
          <h6 className="hover:underline ">
            <SocialIcon
              fgColor="#dee"
              bgColor="#000"
              className=" scale-50"
              url="https://www.linkedin.com/in/obinna-anokwuru-647231149/"
            />
            LinkedIn
          </h6>
        </Link>
        <Link passHref href={"https://www.twitter.com/obiwritescode/"}>
          <h6 className="hover:underline ">
            <SocialIcon
              fgColor="#000"
              bgColor="#dee"
              className=" scale-50"
              url="https://www.twitter.com/obiwritescode/"
            />
            Twitter
          </h6>
        </Link>
      </div>

      <div>&copy; {new Date().getFullYear()} written by obi</div>
    </footer>
  );
};

export default Footer;
