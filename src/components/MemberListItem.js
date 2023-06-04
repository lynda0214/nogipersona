import { useNavigate } from 'react-router-dom';

const MemberListItem = ({ id, name, isGraduated }) => {
  const navigate = useNavigate();
  const borderColor = isGraduated ? 'border-slate-300' : 'border-purple-400';

  const clickHandler = () => {
    navigate(`/member/${id}`);
  };

  return (
    <li className={`w-full border border-2 ${borderColor} pt-1 pb-1 mb-1 text-center cursor-pointer bg-white hover:bg-purple-100 rounded`} onClick={clickHandler}>
      {name}
    </li>
  );
};

export default MemberListItem;
