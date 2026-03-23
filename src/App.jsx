
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './componete/daisyNav/DaisyNav'
import NavBar from './componete/navnar/NavBar'
import PricingOption from './componete/pricingOption/PricingOption'

const pricingPromise = fetch('/pricing.json')
  .then(res => res.json())

function App() {


  return (
    <>

      <header>
        <NavBar></NavBar>


        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>


      <footer>

      </footer>






    </>
  )
}

export default App
