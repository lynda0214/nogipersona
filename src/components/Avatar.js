import { useNavigate } from "react-router-dom";

const Avatar = ({ id, name }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/member/${id}`);
  };

  return (
    <div className="w-28 md:w-44 cursor-pointer" onClick={clickHandler}>
      <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto bg-slate-200">
        <img className="absolute left-0 top-0 hover:scale-110" src={`/images/${id}_prof.jpg`} alt="" />
      </div>
      <h1 className="font-noto mt-1 text-center">{name}</h1>
    </div>
  );
};

export default Avatar;
