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
      <div className='relative bg-slate-300 mb-10 overflow-hidden rounded' style={{ width: '320px', paddingBottom: '384px' }}>
      <img className='absolute left-0 top-0 w-80' src={`/images/${id}_prof.jpg`} alt='' />
      </div>
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
    </div>
  );
};

export default MemberProfile;
