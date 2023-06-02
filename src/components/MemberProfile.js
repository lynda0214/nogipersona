import { Link } from 'react-router-dom';

const DEFAULT_MEMBER = {
  id: '',
  grade: 0,
  name: '',
  birthday: '',
  country: '',
  gundan: []
};

const MemberProfile = ({ member = DEFAULT_MEMBER }) => {
  const { id, grade, name, birthday, country, gundan } = member;
  return (
    <>
      <img src={`/images/${id}_prof.jpg`} alt="" />
      <div>
        <h5>
          {grade}
        </h5>
        <h1>{name}</h1>
      </div>
      <ul>
        <li>誕生日：{birthday}</li>
        <li>出生地：{country}</li>
        <li>軍団：{gundan.join(' ')}</li>
      </ul>
      <Link to='/'>返回</Link>
    </>
  );
};

export default MemberProfile;
