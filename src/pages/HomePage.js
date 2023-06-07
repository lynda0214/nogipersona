import MemberGradeTile from "../components/MemberGradeTile";

const HomePage = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5].map((grade) => <MemberGradeTile key={grade} grade={grade} />)}
    </div>
  );
};

export default HomePage;
