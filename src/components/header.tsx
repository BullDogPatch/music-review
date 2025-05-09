import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-6 border-b-2 border-blue-600 mb-7'>
      <Link href='/'>
        <h1 className='font-bold text-2xl'>BandReviews</h1>
      </Link>
      <div>
        <SignedOut>
          <SignInButton>
            <button className='m-2 cursor-pointer bg-gray-800 px-2 py-1 rounded-sm hover:bg-gray-700'>
              Sign in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className='m-2 cursor-pointer bg-gray-800 px-2 py-1 rounded-sm hover:bg-gray-700'>
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className='flex items-center'>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
