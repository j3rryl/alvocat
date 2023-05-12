import CubeSwiper from "./components/CubeSwiper";
import ResponsiveAppBar from "./components/ResponsiveAppbar";
import { APP_NAME } from "./utils/constants";

export default function Home() {
  return (
    <>    
    <ResponsiveAppBar/>
    <h1 className=" text-center my-2" style={{
      letterSpacing:"1rem",
      fontWeight:"bolder",
      fontSize:25
    }}>{APP_NAME}</h1>
    {/* <CardTile/> */}
    <div style={{
      margin:"10px 3rem",
    }}>

    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"3rem 0"
    }}>
      <CubeSwiper/>
      <CubeSwiper/>
      <CubeSwiper/>
    </div>
    <div style={{
      background:"white",
      fontSize:14
    }} className="font-handlee p-6 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h4>About Us</h4>
    <p>
    We are an agricultural company Incorporated in Kenya in 2015 and we have been in the export of organic exotic fruits since 2015.
        We partner with thousands of enthusiastic small holder farmers, selected orchardists and wild collectors to bring you the acclaimed super fruits:
        the avocado, passion fruit, mango, and the king of fruits the baobab.
        With an endowed sunny climate all year round, rich volcanic soils combined with a dedicated and competent personnel with a delicate keenness
        towards food safety assurance and quality we are delighted to fulfill your need for a natural, nutritious products that also promotes health and wellbeing. This is what excites us every day and makes us wonder in the wild
        to craft something new that enriches life.
        </p>
    </div>
    <div style={{
      background:"white",
      fontSize:14
    }} className="font-handlee p-6 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h4>Mission</h4>
    <p>
    Sustainably grow and provide organic health food products with a promise for good nutrition and wealth creation.
        </p>
    </div>
    </div>
    </>
  )
}
