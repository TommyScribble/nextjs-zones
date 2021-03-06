import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { CTA } from '../components/atoms/CTA'
import { Title } from '../components/atoms/Title'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

	  <Title text='Welcome to the Careers site' variant={'headingXXL'} />

      <CTA variant='primary' type='button'text={'Some text'} large={false} className={'classsnamesjiagsqd'}  />
    </div>
  )
}

export default Home
