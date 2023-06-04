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
            <div className="grid grid-cols-5 gap-8 ml-20 mr-20">
              {[1, 2, 3, 4, 5].map((grade) => (
                <MemberList
                  key={grade}
                  title={`${grade} 期`}
                  members={loadedMembers.filter((member) => member.grade === grade)}
                />
              ))}
            </div>
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
