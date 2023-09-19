import { BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section className="my-44" id="contact">
      <div className="grid md:grid-cols-2  w-[90vw] mx-auto gap-10 ">
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold border-b-4 border-b-black inline-block mb-4">
            Get in Touch
          </h3>
          <p className="flex items-center gap-x-2">
            <MdLocationOn size={26} /> Illinois, United States
          </p>
          <p className="flex gap-x-2">
            <MdEmail size={26} />
            jesusbor006@gmail.com
          </p>

          <a
            href="https://www.linkedin.com/in/jesus-borjas-6589b920a/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-2 underline"
          >
            <BsLinkedin size={24} /> Jesus Borjas
          </a>
        </div>
        <img
          className="hidden md:block max-w-[300px] lg:max-w-[420px]"
          src="../images/undraw.svg"
          alt="Envelope"
        />
      </div>
    </section>
  );
};

export default Contact;
