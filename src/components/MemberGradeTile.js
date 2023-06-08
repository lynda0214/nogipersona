import { useNavigate } from 'react-router-dom';

const MemberGradeTile = ({ grade }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/members/${grade}`);
  };

  return (
    <div
      className="relative cursor-pointer bg-purple-600 hover:bg-purple-800 rounded overflow-hidden"
      style={{ paddingTop: '66.6%' }}
      onClick={clickHandler}
    >
      <img className="absolute left-0 top-0 hover:grayscale hover:mix-blend-screen" src={`/images/${grade}.jpg`} alt="" />
      <h1 className="font-noto text-white font-extrabold text-end pr-4" style={{ fontSize: '3rem' }}># {grade}  期生</h1>
    </div>
  );
};

export default MemberGradeTile;
