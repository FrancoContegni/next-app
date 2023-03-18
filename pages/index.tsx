import Link from 'next/link'
import { MainLayouts } from '../components/layouts/MainLayouts'

//const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayouts>

 <h1 className={'grid'} >
          {/*Ir a <a href='/about' >about</a>*/}
       Ir a  <Link href="/about">About</Link>
        </h1>

    </MainLayouts>
  )
}
