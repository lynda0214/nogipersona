import { Link } from 'react-router-dom';

const MemberListItem = ({ id, name }) => {
  return (
    <li>
      <Link to={`/${id}`}>{name}</Link>
    </li>
  );
};

export default MemberListItem;
