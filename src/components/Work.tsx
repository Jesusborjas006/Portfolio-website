type WorkProps = {
  name: string;
  img: string;
};

const Work = ({ name, img }: WorkProps) => {
  return (
    <div className="cursor-pointer transition-all hover:translate-y-[-10px]">
      <img className="rounded-lg" src={`../images/${img}`} alt={name} />
      <p className="text-xl lg:text-2xl font-semibold mt-2 ">{name}</p>
    </div>
  );
};

export default Work;
