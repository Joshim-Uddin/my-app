import Form from '@/components/Form'
import Table from '@/components/Table'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white md:px-24 p-4 bg-[#000061]">
     <h1 className='text-4xl font-semibold p-3'>Welcome to Information Form</h1>
     <h2 className='my-5 text-xl'>Please Provide Your Information</h2>
      <div className='mb-8'><Form /></div>
      <div>
        <h2 className='text-xl pb-5 text-center'>Your Submitted Data is Here</h2>
        <Table />
      </div>

      
    </main>
  )
}
