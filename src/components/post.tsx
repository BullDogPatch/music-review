import { formatDate } from '@/utils/dateFormatter';
import { Post } from '@/utils/types';

interface Params {
  post: Post;
}

const SinglePost = ({ post }: Params) => {
  return (
    <li className=''>
      <p>{post.title}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.description}</p>
      <p>{formatDate(post.created_at)}</p>
    </li>
  );
};

export default SinglePost;
