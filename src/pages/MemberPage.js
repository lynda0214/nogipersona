import { useParams } from 'react-router-dom';

const MemberPage = () => {
  const params = useParams();
  return <h1>{params.memberId}</h1>
};

export default MemberPage;
