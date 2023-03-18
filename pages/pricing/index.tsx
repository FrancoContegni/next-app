import Link from 'next/link'
import { MainLayouts } from '../../components/layouts/MainLayouts'

//const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
    <MainLayouts>

 <h1 className={'grid'} >
          {/*Ir a <a href='/about' >about</a>*/}
       Ir a  <Link href="/">Pricing Home</Link>
        </h1>
        <h1 className={'grid'} >
          {/*Ir a <a href='/about' >about</a>*/}
       Ir a  <Link href="/contact">Contact</Link>
        </h1>

    </MainLayouts>
  )
}
