import React, { FC } from "react";
import { SectionContainer, SectionTitle } from "./Reusable";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log({ formData });
    window.location.href = `mailto:anokwuruobi@gmail.com?subject=${formData.subject}&body=Hi Obi My name is ${formData.name}. ${formData.message} (${formData.email})`;
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
    <SectionContainer classes="h-screen flex relative texmd:text-left md:text-row max-w-7-xl justify-evenly mx-auto items-center flex-col">
      <SectionTitle title="contact" />

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I&apos;ve got what you need.{" "}
          <span className="underline decoration-[#F7AB0a] underline-offset-8">
            Lets talk.
          </span>
        </h4>

        <div className="space-y-10 ">
          {<IconText icon={<PhoneIcon />} text="12345678" />}
          {<IconText icon={<EnvelopeIcon />} text="tubby@tubby.com" />}
          {<IconText icon={<MapPinIcon />} text="10 Jack Street Lane" />}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>
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
    </SectionContainer>
  );
};

export default Contact;
