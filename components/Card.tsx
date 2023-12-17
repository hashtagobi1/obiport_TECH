"use client";

import { Experience } from "../utils/typings";
import { urlFor } from "../lib/sanity";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
type Props = {
  data: Experience;
  i: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
};

function createHexCode(id: string) {
  // Generate random R, G, and B values
  var r = Math.floor(Math.random() * 256); // Red value
  var g = Math.floor(Math.random() * 256); // Green value
  var b = Math.floor(Math.random() * 256); // Blue value

  // Convert decimal to hexadecimal
  var rHex = r.toString(16).padStart(2, "0"); // Convert red to hex
  var gHex = g.toString(16).padStart(2, "0"); // Convert green to hex
  var bHex = b.toString(16).padStart(2, "0"); // Convert blue to hex

  // Concatenate the values to form a hex color code
  var hexCode = "#" + rHex + gHex + bHex;

  return hexCode;
}
const Card = ({ data, i, progress, range, targetScale }: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  console.log({targetScale})
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className={`h-[100vh] flex items-center justify-center sticky top-0`}
    >
      <motion.div
        className={`w-[1000px] h-[500px] relative -top-[10%] rounded-lg shadow-lg`}
        style={{
          scale,
          backgroundColor: createHexCode(data._id),
          top: `calc(-10% + ${i * 25}px)`,
        }}
      >
        <div className="flex justify-between ">
          <div
            style={{}}
            className="relative w-3/5 h-full rounded-md overflow-hidden"
          >
            <motion.div style={{}} className={`h-full w-full`}>
              <img
                className="w-24 h-24 md:w-32 md:h-32 rounded-md xl:w-[200px] xl:h-[200px] object-cover object-center"
                src={urlFor(data.companyImage).url()}
                alt="logo"
              />
            </motion.div>
          </div>
          <div className="flex flex-col">
            <p>Technologies used</p>
            <div className="flex-row flex">
              {data.technologies?.map((tech, i) => {
                return (
                  <div key={`${tech._id}`}>
                    <img
                      src={urlFor(tech.image).url()}
                      alt="logo"
                      className="h-5 w-5 md:h-10 md:w-10 rounded-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-between">
          <p className="text-2xl font-bold">
            <span className="font-normal">Company: </span>
            {data.company}
          </p>
          <motion.p
            style={{
              scale: imageScale,
            }}
            className="text-2xl font-bold"
          >
            <span className="font-normal">Title: </span>
            {data.jobTitle}
          </motion.p>
          <p></p>
        </div>
        <div className="overflow-auto">
          <ul className="border-black border mt-24 rounded list-none">
            {data.points
              ? data.points.map((point, i) => {
                  return (
                    <li className="text-xs " key={i}>
                      {point}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
