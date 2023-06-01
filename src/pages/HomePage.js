import MemberList from '../components/MemberList';

const DUMMY_MEMBERS = [
  {
    id: 'akimotomanatsu',
    name: '秋元真夏',
    birthday: '1993/08/20',
    country: '埼玉縣',
    grade: 1,
    graduated: false,
    gundan: ['真夏尊敬軍團'],
    color: ['red', 'pink'],
    colorName: ['赤', '桃'],
  },
  {
    id: 'ikutaerika',
    name: '生田繪梨花',
    birthday: '1997/01/22',
    country: '東京都',
    grade: 1,
    graduated: false,
    gundan: ['鬱金香'],
    color: ['yellow', 'yellow'],
    colorName: ['黃', '黃'],
  },
  {
    id: 'inouesayuri',
    name: '井上小百合',
    birthday: '1994/12/14',
    country: '埼玉縣',
    grade: 1,
    graduated: false,
    gundan: ['犬組'],
    color: ['white', 'white'],
    colorName: ['白', '白'],
  },
];

const HomePage = () => {
  return (
    <>
      <h1>List of Members</h1>
      <MemberList members={DUMMY_MEMBERS} />
    </>
  );
};

export default HomePage;
