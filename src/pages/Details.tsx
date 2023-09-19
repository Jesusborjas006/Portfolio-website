import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
      <nav className="border p-4 px-6">
        <Link to="/" className="text-xl ">
          &lt;Jesus Borjas /&gt;
        </Link>
      </nav>
      <section className="px-6 mx-auto my-10">
        <Link to="/" className="border p-2 rounded-md">
          Go Back Home
        </Link>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center items-start gap-x-10 mt-10">
          <div className="">
            <h2 className="text-2xl md:text-3xl mb-2">Tesla Clone</h2>
            <p className="lg:max-w-[90%] leading-6">
              This project involves creating Tesla's home page. This was built
              using React with CSS to style the components and to make it
              responsive across mobile devices. This project was to showcase my
              skills in being able to take in a design and implement it into
              code.
            </p>
            <p className="my-4">
              <span className="font-semibold">Tech Stack Used:</span>{" "}
              TypeScript, React, Tailwind CSS, Cypress
            </p>
            <div className="space-x-4 my-4">
              <button className="border p-2 rounded-md">Live Site</button>
              <button className="border p-2 rounded-md">See Code</button>
            </div>
          </div>
          <img
            className="rounded-md my-4 lg:w-[50%]"
            src="../images/tesla-website.png"
            alt="project img"
          />
        </div>
      </section>
    </>
  );
};

export default Details;
