import { Suspense } from 'react';
import { useLoaderData, Await, json, defer } from 'react-router-dom';
import MemberProfile from '../components/MemberProfile';

const MemberPage = () => {
  const { member } = useLoaderData();
  return (
    <Suspense fallback={<p className='text-center'>Loading...</p>}>
      <Await resolve={member}>
        {(loadedMember) => <MemberProfile member={loadedMember} />}
      </Await>
    </Suspense>
  );
};

export default MemberPage;

async function loadMember(memberId) {
  const response = await fetch('/nogipersona/data.json');

  if (!response.ok) {
    throw json({ message: 'Could not fetch members.' }, { status: 500 });
  } else {
    const resData = await response.json();
    const memberData = resData.find((data) => data.id === memberId);
    return memberData;
  }
}

export function loader({ request, params }) {
  return defer({
    member: loadMember(params.memberId),
  });
}
