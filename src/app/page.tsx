import Image from 'next/image'
import Heading from './Heading'
import About from './About'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Heading />
      <About />
      <Footer />
    </div>
  )
}
