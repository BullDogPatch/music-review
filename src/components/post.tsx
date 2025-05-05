import { Post } from '@/utils/types';

interface Params {
  post: Post;
}

const SinglePost = ({ post }: Params) => {
  return (
    <div>
      <p>{post.title}</p>
      <img src={post.image} alt='' />
      <p>{post.description}</p>
    </div>
  );
};

export default SinglePost;
