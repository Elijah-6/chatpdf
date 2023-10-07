import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 h-screen w-screen'>
      <div className="absolute top-1/2 left-1/2">
        <div className="flex-col">
          <h1 className='text-red-50'> Hello World</h1>
          <UserButton/>
        </div>
      </div>
    </div>
  )
}
