import MemberListItem from './MemberListItem';

const MemberList = ({ members }) => {
  return (
    <ul>
      {members.map((member) => (
        <MemberListItem key={member.id} id={member.id} name={member.name} />
      ))}
    </ul>
  );
};

export default MemberList;
