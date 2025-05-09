import { fetchAllPosts } from '@/utils/api';

const AllPostsPage = async () => {
  const posts = await fetchAllPosts();
  console.log(posts);
  return <div>AllPostsPage</div>;
};

export default AllPostsPage;
