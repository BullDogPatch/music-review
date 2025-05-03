import { currentUser } from '@clerk/nextjs/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ShitPoster - Create profile',
  description: 'Create Profile',
};

const CreateProfilePage = async () => {
  const user = await currentUser();
  return <div>{user?.fullName}</div>;
};

export default CreateProfilePage;
