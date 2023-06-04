import MemberListItem from './MemberListItem';

const MemberList = ({ title, members }) => {
  return (
    <div className="w-4/5 font-noto opacity-100">
      <h1 className='font-semibold mb-2 text-center'>{title}</h1>
      <ul className='font-regular w-full'>
        {members.map((member) => (
          <MemberListItem key={member.id} id={member.id} name={member.name} isGraduated={member.graduated} />
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
