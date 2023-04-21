import Image from 'next/image'
import { data } from '@/data/data'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <h1 className='text-center p-2 bg-blue-300 font-bold uppercase block w-full'>Karta pracy biologia</h1>
      <ul>
      {data.map((zadanie, id) => (
                    <li key={id} className=' border-2 mx-6 py-3 mt-10 rounded-3xl'>
                        <p className='text-center text-2xl font-bold'>Zadanie {zadanie.nr_zad}</p>
                        <p className='mx-5 mt-3 font-bold text-xs'>{zadanie.trest_zad}</p>
                        <p className='mt-4 mx-5 text-xs'>{zadanie.opis_zad}</p>
                        <p className='mt-2 mx-5 text-xs font-bold'>{zadanie.polecenie_zad}</p>
                        <p className='mt-4 mx-5 text-xs'>{zadanie.odp_na_zad}</p>
                    </li>
                ))}
      </ul>
      <h1 className=' bottom-0 mt-5 text-center pb-1 bg-blue-300 font-bold'>TWR Ekipa 	&#169; 2023</h1>
    </main>
  )
}
