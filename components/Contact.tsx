import { FC } from "react";
import { SectionContainer, SectionTitle } from "./Reusable";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../utils/typings";

type Props = {
  pageInfo?: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: FC<Props> = ({ pageInfo }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anokwuruobi@gmail.com?subject=${formData.subject}&body=Hi Obi My name is ${formData.name}. \n ${formData.message} [from (${formData.email})]`;
  };

  const IconText: FC<{ icon: JSX.Element; text: string }> = ({
    icon,
    text,
  }) => {
    return (
      <div className="flex items-center justify-center space-x-5">
        <div className="w-7 h-7 animate-pulse">{icon}</div>
        <p>{text}</p>
      </div>
    );
  };
  return (
    <SectionContainer classes="h-screen flex relative md:text-left md:text-row max-w-7-xl justify-evenly mx-auto items-center flex-col">
      <SectionTitle title="contact" />

      <div className="flex flex-col mt-24 space-y-10">
        <h4 className="text-md mt-24 max-w-xs text-center">
          looking for a creative open minded addition to your team?
        </h4>
        <span
          className="text-xl mt-20 font-semibold text-center 
        underline decoration-[#F7AB0a] underline-offset-8 animate-pulse"
        >
          lets talk.
        </span>

        <div className="mb-12">
          {pageInfo && pageInfo?.phoneNumber ? (
            <IconText icon={<PhoneIcon />} text={pageInfo?.phoneNumber ?? ""} />
          ) : null}
          {<IconText icon={<EnvelopeIcon />} text={pageInfo?.email ?? ""} />}
          {/* {<IconText icon={<MapPinIcon />} text={pageInfo?.address ?? ""} />} */}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <input
          {...register("name")}
          placeholder="Name"
          className="contactInput max-w-2xl"
          type="text"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="contactInput"
          type="email"
        />
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#F7AB0a]/50 rounded-md  p-2 font-bold text-2xl uppercase"
        >
          Submit
        </button>
      </form>
      <div>&copy; {new Date().getFullYear()} written by obi</div>
    </SectionContainer>
  );
};

export default Contact;
