import { Suspense } from 'react';
import { useLoaderData, Await, json, defer } from 'react-router-dom';
import MemberList from '../components/MemberList';

const HomePage = () => {
  const { members } = useLoaderData();
  return (
    <>
      <Suspense fallback={<p className='text-center'>Loading...</p>}>
        <Await resolve={members}>
          {(loadedMembers) => (
            <>
              <h1>1 期</h1>
              <MemberList
                members={loadedMembers.filter((member) => member.grade === 1)}
              />
              <h1>2 期</h1>
              <MemberList
                members={loadedMembers.filter((member) => member.grade === 2)}
              />
              <h1>3 期</h1>
              <MemberList
                members={loadedMembers.filter((member) => member.grade === 3)}
              />
              <h1>4 期</h1>
              <MemberList
                members={loadedMembers.filter((member) => member.grade === 4)}
              />
              <h1>5 期</h1>
              <MemberList
                members={loadedMembers.filter((member) => member.grade === 5)}
              />
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;

async function loadMembers() {
  const response = await fetch('/data.json');

  if (!response.ok) {
    throw json({ message: 'Could not fetch members.' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader() {
  return defer({
    members: loadMembers(),
  });
}
