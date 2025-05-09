import { fetchAllPosts } from '@/utils/api';
import { formatDate } from '@/utils/dateFormatter';
import { Post } from '@/utils/types';

const AllPostsPage = async () => {
  const posts = await fetchAllPosts();
  return (
    <ul>
      {posts.length &&
        posts.map((post: Post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <img src={post.image} alt={post.title} />
            <p>{post.description}</p>
            <p>{formatDate(post.created_at)}</p>
          </li>
        ))}
    </ul>
  );
};

export default AllPostsPage;
