import Link from 'next/link';

export default function Home() {
  return (
    <div className='mx-8 flex flex-col justify-center items-center h-[60vh]'>
      <p>
        Welcome to BandReviews, your go-to place to share and discover music
        experiences! Whether you've just seen a live show or heard an album that
        blew your mind, this is the space to leave your thoughts. From indie
        hits to rock legends, you can write and read reviews, connect with other
        music lovers, and dive deep into the world of sound. Join us, leave your
        mark, and find your next favorite band!
      </p>
      <Link href='/create-post' className='bg-gray-700 px-2 py-1 rounded-sm'>
        Create Post
      </Link>
    </div>
  );
}
