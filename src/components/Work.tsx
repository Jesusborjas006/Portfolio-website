type WorkProps = {
  name: string;
  img: string;
};

const Work = ({ name, img }: WorkProps) => {
  return (
    <div>
      <img src={`../images/${img}`} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Work;
