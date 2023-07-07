import Form from '@/components/Form'
import Table from '@/components/Table'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Welcome to next App</h1>
     <h2>Please Provide Your Information</h2>
      <div><Form /></div>
      <div>
        <Table />
      </div>

      
    </main>
  )
}
