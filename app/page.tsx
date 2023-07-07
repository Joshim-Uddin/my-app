import Form from '@/components/Form'
import Table from '@/components/Table'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white md:px-24 p-4 bg-[#000061]">
     <h1 className='text-4xl font-semibold p-3 text-center'>Welcome to information form</h1>
     <h2 className='my-5 text-xl text-center'>Please provide your information</h2>
      <div className='mb-8'><Form /></div>
      <div>
        <h2 className='text-xl pb-5 text-center'>Your submitted information is here</h2>
        <Table />
      </div>

      
    </main>
  )
}
