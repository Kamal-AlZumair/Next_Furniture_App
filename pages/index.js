import Head from 'next/head'
import Features from '../components/Features'
import FeaturesSecond from '../components/FeaturesSecond'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import NewItems from '../components/NewItems'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'


export default function Home() {
  return (
    <div className=' w-full max-w-[1440px] mx-auto bg-white'>
      <Head>
        <title>Next Furniture App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
      <Features/>
      <NewItems/>
      <FeaturesSecond/>
      <Products/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
