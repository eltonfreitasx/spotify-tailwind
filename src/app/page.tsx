import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { ChevronRight, ChevronLeft, Play} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       <Sidebar />
        <main className="flex-1 p-6">
          <div className=' flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-4xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Guns.jpg" width={104} height={104} alt="Capa do álbum Wasting" />
              <strong>Wasting Light</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Guns.jpg" width={104} height={104} alt="Capa do álbum Wastin" />
              <strong>Wasting Light</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Guns.jpg" width={104} height={104} alt="Capa do álbum Wastin" />
              <strong>Wasting Light</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Guns.jpg" width={104} height={104} alt="Capa do álbum Wastin" />
              <strong>Wasting Light</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Guns.jpg" width={104} height={104} alt="Capa do álbum Wastin" />
              <strong>Wasting Light</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Guns.jpg" width={104} height={104} alt="Capa do álbum Wastin" />
              <strong>Wasting Light</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 p-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-semibold text-2xl mt-10'>Made Elton Freitas Xavier da Silva</h1>

          <div className='grid grid-cols-8 mt-4 gap-4'>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Guns.jpg" className='w-full' width={120} height={120} alt="Capa do álbum Wasting" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Walows, Coin, gir in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Guns.jpg" className='w-full' width={120} height={120} alt="Capa do álbum Wasting" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Walows, Coin, gir in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Guns.jpg" className='w-full' width={120} height={120} alt="Capa do álbum Wasting" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Walows, Coin, gir in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Guns.jpg" className='w-full' width={120} height={120} alt="Capa do álbum Wasting" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Walows, Coin, gir in red and more</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Guns.jpg" className='w-full' width={120} height={120} alt="Capa do álbum Wasting" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Walows, Coin, gir in red and more</span>
            </a>
          </div>
        </main>
      </div>
     <Footer />
    </div>
  );
}
