import { Link } from "react-router-dom";
import { projectsData } from "../data";

const Details = () => {
  const endpointPath = window.location.pathname;
  const endpointNum = endpointPath.substring(endpointPath.length - 1);

  const selectedProject = projectsData.find(
    (project) => project.id === Number(endpointNum)
  );
  const techElements = selectedProject?.stack.map((tech) => tech);

  return (
    <>
      <nav className="border p-4 px-6 bg-[#44546F] text-white">
        <Link to="/" className="text-xl ">
          &lt;Jesus Borjas /&gt;
        </Link>
      </nav>
      <section className="px-6 mx-auto my-10 bg-[#F1F2F4]">
        <Link
          to="/"
          className="border p-2 font-medium rounded-md text-black border-[#B3B9C4] hover:bg-[#091E42] hover:text-white hover:border-none"
        >
          Go Back Home
        </Link>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center items-start gap-x-10 mt-10">
          <div>
            <h2 className="text-2xl md:text-3xl mb-2">
              {selectedProject?.name}
            </h2>
            <p className="lg:max-w-[90%] leading-6">
              {selectedProject?.description}
            </p>
            <p className="my-4 text-[#2C3E5D]">
              <span className="font-semibold text-black">Tech Stack Used:</span>{" "}
              {techElements?.join(", ")}
            </p>
            <div className="space-x-4 my-8">
              {selectedProject?.liveSite && (
                <a
                  href={selectedProject?.liveSite}
                  target="_blank"
                  rel="noreferrer"
                  className=" py-2 px-6 rounded-md font-medium bg-[#2C3E5D] text-white hover:bg-[#091E42] transition-colors"
                >
                  Live Site
                </a>
              )}

              <a
                href={selectedProject?.githubLink}
                target="_blank"
                rel="noreferrer"
                className="border py-2 px-6 rounded-md font-medium text-[#0f0f0f] border-[#B3B9C4] hover:bg-[#091E42] hover:text-white hover:border-none"
              >
                See Code
              </a>
            </div>
          </div>
          <img
            className="rounded-md my-4 lg:w-[50%]"
            src={`../images/${selectedProject?.img}`}
            alt="project img"
          />
        </div>
      </section>
    </>
  );
};

export default Details;
