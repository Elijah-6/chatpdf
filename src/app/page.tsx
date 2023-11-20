import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link';
import {LogIn} from 'lucide-react';
import FileUpload from '@/components/FileUpload';

// import Image from 'next/image'

export default function Home() {
  //user authentication check with clerk auth
  const {userId} = auth();
  const isAuth = !!userId;
  return (
    <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 h-screen w-screen'>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with PDF</h1>
          </div>
          <UserButton afterSignOutUrl='/'/>

          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          
          <p className="max-w-xl mt-2 text-lg text-green-900">
            Join Millions of students, Professors and Researchers using 
            AI to chat with PDF. Get your questions answered quickly.
          </p>

          <div className="w-full mt-4">
            {isAuth ? <FileUpload/> : 
            <Link href ="/sign-in">
              <Button>Login to get started
                <LogIn className='w-4 h-4 ml-2'/>
              </Button>
            </Link> }
          </div>
        </div>
      </div>
    </div>
  )
}
