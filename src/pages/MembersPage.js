import { Suspense } from 'react';
import { Await, useLoaderData, useParams, json, defer } from 'react-router-dom';
import MemberList from '../components/MemberList';

const MembersPage = () => {
  const { members } = useLoaderData();
  const { memberGrade } = useParams();
  return (
    <Suspense fallback={<p className='text-center'>Loading...</p>}>
      <Await resolve={members}>
        {(loadedMembers) => (
          <MemberList title={`${memberGrade} 期`} grade={memberGrade} members={loadedMembers} />
        )}
      </Await>
    </Suspense>
  );
};

export default MembersPage;

async function loadMembers(memberGrade) {
  const response = await fetch('/nogipersona/data.json');

  if (!response.ok) {
    throw json({ message: 'Could not fetch members.' }, { status: 500 });
  } else {
    const resData = await response.json();
    const membersData = resData.filter((data) => data.grade === +memberGrade);
    return membersData;
  }
}

export function loader({ request, params }) {
  return defer({
    members: loadMembers(params.memberGrade),
  });
}
