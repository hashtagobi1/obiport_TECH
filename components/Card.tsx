import { Experience } from "../utils/typings";
import { urlFor } from "../lib/sanity";

type Props = {};

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
const Card = (data: Experience) => {
  return (
    <div className="h-[100vh] flex items-center justify-center sticky top-0  ">
      <div
        className="w-[1000px] h-[500px] relative -top-[10%] rounded-lg shadow-lg"
        style={{ backgroundColor: createHexCode(data._id) }}
      >
        <div className="flex justify-between">
          <div>
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-md xl:w-[200px] xl:h-[200px] object-cover object-center"
              src={urlFor(data.companyImage).url()}
              alt="logo"
            />
          </div>
          <div className="flex flex-col">
            <p>Technologies used</p>
            <div className="flex-row flex">
              {data.technologies?.map((tech, i) => {
                console.log({ tech });
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
          <p>{data.company}</p>
          <p>{data.jobTitle}</p>
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
      </div>
    </div>
  );
};

export default Card;
