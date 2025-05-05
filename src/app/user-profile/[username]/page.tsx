import SinglePost from '@/components/post';
import { fetchPostsByUsername, fetchUser } from '@/utils/api';
import { Post, User } from '@/utils/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
  const posts: Post[] = await fetchPostsByUsername(username);
  if (!user) notFound();

  return (
    <div className='flex flex-col'>
      <div>
        <p>
          {user.first_name} {user.last_name}
        </p>
        <p>{user.username}</p>
        <p>{user.bio}</p>
      </div>
      <div>
        <h4>Your Posts</h4>
        <div>
          {posts.length === 0 ? (
            <div>
              <p>You have no posts yet</p>
              <Link href='/create-post'>Create Post</Link>
            </div>
          ) : (
            posts.map((post) => <SinglePost key={post.id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
