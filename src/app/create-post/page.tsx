import SubmitButton from '@/components/submit-button';
import { createPost } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';

const CreatePostPage = async () => {
  const user = await currentUser();

  return (
    <section className='min-h-screen flex items-center justify-center  px-4 py-12'>
      <form
        action={createPost}
        className='w-full sm:max-w-md  shadow-xl rounded-2xl p-6 sm:p-8 space-y-6'
      >
        <h1 className='text-2xl sm:text-3xl font-bold text-center text-foreground'>
          Create a post
        </h1>

        <input type='hidden' name='clerk_id' value={user?.id} />

        <div className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='title'
            name='title'
            required
            className='w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-black dark:text-white'
          />
          <input
            type='text'
            placeholder='www.imageurl.com'
            name='image'
            required
            className='w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-black dark:text-white'
          />
          <textarea
            name='description'
            placeholder='Tell us a bit about who you went to see...'
            required
            className='w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-black dark:text-white resize-none min-h-[100px]'
          ></textarea>
        </div>

        <div>
          <SubmitButton text='Create Post' />
        </div>
      </form>
    </section>
  );
};

export default CreatePostPage;
