import { FC } from "react";
import { ExperienceCard } from "./Reusable";
import { Experience } from "../utils/typings";

type Props = {
  experiences: Experience[];
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
  console.log({ hexCode });

  return hexCode;
}

const Experience: FC<Props> = ({ experiences }) => {
  return (
    <div className=" ">
      {experiences
        ? experiences.reverse().map((exp, i) => {
            return (
              <ExperienceCard
                bgColor={createHexCode(exp._id)}
                key={exp._id}
                exp={exp}
                position={i}
              />
            );
          })
        : ""}
    </div>
  );
};

export default Experience;
