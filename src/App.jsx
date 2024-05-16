// import DaisyNav from "./componants/DaisyNav/DaisyNav"
import LineChart from "./componants/LineChart/LineChart"
import NavBar from "./componants/Navbar/NavBar"
import Phone from "./componants/Phone/Phone"
import PriceOptions from "./componants/PriceOptions/PriceOptions"




function App() {


  return (
    <>

      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-6xl p-2 bg-rose-500'>Price-options</h1>
      <PriceOptions></PriceOptions>
      <LineChart datakey="math"></LineChart>
      <Phone></Phone>

    </>
  )
}

export default App
