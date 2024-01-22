import React from 'react'
import {Nav,Hero,Parters,MyPoint,Footer} from './components/index.js'
const page = () => {
  return (
    <main>
      <section>
        <Nav />
        <Parters />
                <Hero />
                <MyPoint />
                <Footer />

      

      </section>
    </main>
  )
}

export default page