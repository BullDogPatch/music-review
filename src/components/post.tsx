import { formatDate } from '@/utils/dateFormatter';
import { Post } from '@/utils/types';
import Link from 'next/link';

interface Params {
  post: Post;
}

const SinglePost = ({ post }: Params) => {
  return (
    <Link href={`/post/${post.id}`}>
      <li className='list-none w-[90%] mx-auto my-4 p-3 md:p-6 bg-blue-950 hover:bg-blue-900 rounded-2xl shadow-md transition-colors duration-200'>
        <h2 className='text-base md:text-xl font-semibold text-white mb-2'>
          {post.title}
        </h2>
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-40 md:h-64 object-cover rounded-xl mb-3'
        />
        <p className='text-sm md:text-base text-gray-300 mb-2'>
          {post.description.length > 80
            ? post.description.slice(0, 80) + '...'
            : post.description}
        </p>
        <p className='text-xs md:text-sm text-gray-400'>
          {formatDate(post.created_at)}
        </p>
      </li>
    </Link>
  );
};

export default SinglePost;
