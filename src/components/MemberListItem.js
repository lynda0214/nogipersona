import { Link } from 'react-router-dom';

const MemberListItem = ({ id, name }) => {
  return (
    <li>
      <Link to={`/member/${id}`}>{name}</Link>
    </li>
  );
};

export default MemberListItem;
