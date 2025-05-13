import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

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
            <Link href='/create-post'>
              <button className='flex justify-center items-center font-bold bg-gray-600 rounded-sm px-2 py-2 mr-2 cursor-pointer'>
                <FaPlus className='md:mr-1' />
                <span className='hidden md:block'>Create</span>
              </button>
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
