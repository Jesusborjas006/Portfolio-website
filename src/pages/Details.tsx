import { Link } from "react-router-dom";
import { projectsData } from "../data";

const Details = ( ) => {
  const endpointPath = window.location.pathname;
  const endpointNum = endpointPath.substring(endpointPath.length - 1);

  const selectedProject = projectsData.find(
    (project) => project.id === Number(endpointNum)
  );
  const techElements = selectedProject?.stack.map((tech) => tech);

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
          <div>
            <h2 className="text-2xl md:text-3xl mb-2">
              {selectedProject?.name}
            </h2>
            <p className="lg:max-w-[90%] leading-6">
              {selectedProject?.description}
            </p>
            <p className="my-4">
              <span className="font-semibold">Tech Stack Used:</span>{" "}
              {techElements?.join(", ")}
            </p>
            <div className="space-x-4 my-4">
              <button className="border p-2 rounded-md">Live Site</button>
              <button className="border p-2 rounded-md">See Code</button>
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
