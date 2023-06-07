import Avatar from './Avatar';

const MembersGallery = ({ title, members }) => {
  return (
    <>
      <h1 className="font-noto text-xl text-center mb-4">{title}</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-x-4 gap-y-8">
        {members.map((member) => (
          <Avatar key={member.id} id={member.id} name={member.name} />
        ))}
      </div>
    </>
  );
};

export default MembersGallery;
