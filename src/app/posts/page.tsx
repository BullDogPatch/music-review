import SinglePost from '@/components/post';
import { fetchAllPosts } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import { Post } from '@/utils/types';

const AllPostsPage = async () => {
  const posts = await fetchAllPosts();
  return (
    <ul>
      {posts.length &&
        posts.map((post: Post) => <SinglePost key={post.id} post={post} />)}
    </ul>
  );
};

export default AllPostsPage;
