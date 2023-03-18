import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayouts } from '../components/layouts/MainLayouts'

export default function AboutPage() {
  return (
    <>
        <h1 className={'grid'} >
          Ir a <Link href="/">Home</Link>
        </h1>
    </>


  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
      <MainLayouts>

          <DarkLayout>

          {page}

          </DarkLayout>

      </MainLayouts>
  )
}
