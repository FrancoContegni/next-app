import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from '../Navbar'
import styles from "./MainLayout.module.css";

export const MainLayouts:FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Head>
        <title>My new app</title>
        <meta name="description" content="Mi nueva super app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Navbar />

      <main className={styles.main}>

        
{ children }


      </main>
    </>
  )
}
