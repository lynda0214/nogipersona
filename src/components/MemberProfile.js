import { Link } from 'react-router-dom';
import OoenColor from './OoenColor';

const DEFAULT_MEMBER = {
  id: '',
  grade: 0,
  name: '',
  birthday: '',
  country: '',
  gundan: [],
};

const MemberProfile = ({ member = DEFAULT_MEMBER }) => {
  const { id, grade, name, birthday, country, gundan, color, colorName } = member;
  return (
    <div className='flex items-center flex-col'>
      <img className='w-80 mb-10' src={`/images/${id}_prof.jpg`} alt='' />
      <div className='w-80 text-center'>
        <h5 className='text-sm'>{`${grade} 期生`}</h5>
        <h1 className='text-2xl font-semibold mb-5'>{name}</h1>
      </div>
      <ul>
        <li>誕生日：{birthday}</li>
        <li>出生地：{country}</li>
        <li>軍団：{gundan.join(' ')}</li>
        <li>応援色：<OoenColor color={color[0]} colorName={colorName[0]} /><OoenColor color={color[1]} colorName={colorName[1]} /></li>
      </ul>
      <div className="mt-10 text-purple-500 hover:text-purple-800">
        <Link to='/nogipersona/'>[返回]</Link>
      </div>
    </div>
  );
};

export default MemberProfile;
