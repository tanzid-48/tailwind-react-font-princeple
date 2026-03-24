
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './componete/daisyNav/DaisyNav'
import NavBar from './componete/navnar/NavBar'
import PricingOption from './componete/pricingOption/PricingOption'
import ResultChart from './componete/resultChart/ResultChart'
import axios from 'axios'
import MarkChart from './componete/markChart/MarkChart'

const pricingPromise = fetch('/pricing.json')
  .then(res => res.json())
const marksPromise = axios.get('/marksData.json');


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
         

        <Suspense fallback ={<span className="loading loading-spinner text-success"></span>}>
          <MarkChart  marksPromise= {marksPromise} >

          </MarkChart>
        </Suspense>


          <ResultChart></ResultChart>


      </main>


      <footer>

      </footer>






    </>
  )
}

export default App
