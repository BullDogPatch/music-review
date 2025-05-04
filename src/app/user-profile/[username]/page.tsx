import { fetchUser } from '@/app/utils/api';
import { User } from '@/utils/types';

interface Params {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { username } = await params;
  const user = await fetchUser(username);
  if (!user) return { title: 'User Not Found' };

  return {
    title: `${user.username}'s Profile`,
    description: `.`,
  };
}

const UserProfilePage = async ({ params }: Params) => {
  const { username } = await params;
  const user: User = await fetchUser(username);
  console.log(user?.username);
  return (
    <div>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>{user.username}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfilePage;
