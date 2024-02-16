import { Link } from "react-router-dom";

type WorkProps = {
  id: number;
  name: string;
  img: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>;
};

const Work = ({ id, name, img, setSelectedProject }: WorkProps) => {
  return (
    <Link
      to={`/details/${id}`}
      className="cursor-pointer transition-all hover:translate-y-[-10px]"
      onClick={() => setSelectedProject(id)}
    >
      <img className="rounded-lg" src={`../images/${img}`} alt={name} />
      <p className="text-xl lg:text-2xl font-medium mt-2 ">{name}</p>
    </Link>
  );
};

export default Work;
