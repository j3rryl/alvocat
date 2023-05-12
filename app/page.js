import Link from "next/link";
import CubeSwiper from "./components/CubeSwiper";
import ResponsiveAppBar from "./components/ResponsiveAppbar";
import { APP_NAME } from "./utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>    
    <ResponsiveAppBar/>
    <h1 className=" text-center my-2 !font-playball" style={{
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
    <h4 className="text-lg">About Us</h4>
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
    <h4 className="text-lg">Mission</h4>
    <p>
    Sustainably grow and provide organic health food products with a promise for good nutrition and wealth creation.
        </p>
    </div>
    <h4 className="text-xl">Certifications' & Accreditations</h4>
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      gap:30,
      margin:"1rem 0"
    }}>
    <div 
    style={{
      background:"white",
      fontSize:14,
      width:"40%",
      height:500,
      padding:"15px 0",
      display:"flex",
      flexDirection:"column"
    }}
    className="font-handlee bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div style={{
          display:"flex",
          justifyContent:"center",
          height:"50%"
        }} >
        <div>
        <Image 
            className="w-full h-auto"
            width="0"
            height="0"
            sizes="100vw"
            src="https://mavunobios.co.ke/wp-content/uploads/2021/10/logo-global-300x260.png" 
            // src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" 
            alt="Partners Images" />
            
        </div>
        </div>
        <div 
        style={{
          padding:"15px 0",
          margin:"0 20px",
          height:"50%"
        }}>
          <p>
          GLOBALG.A.P. offers more than 40 standards  and programs for 3 scopes: Crops, Livestock, and Aquaculture
          localg.a.p. and GLOBALG.A.P.+ Add-on offer programs for developing customized solutions for our member
          </p>
        </div>
  </div>
    
  <div 
    style={{
      background:"white",
      fontSize:14,
      width:"40%",
      height:500,
      padding:"15px 0",
      display:"flex",
      flexDirection:"column"
    }}
    className="font-handlee bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div style={{
          display:"flex",
          justifyContent:"center",
          height:"50%"
        }} >
        <div>
        <Image 
            className="w-full h-auto mt-16"
            width="0"
            height="0"
            sizes="100vw"
            src="https://mavunobios.co.ke/wp-content/uploads/2021/10/SMETA_logo-300x96.png" 
            // src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" 
            alt="Partners Images" />
            
        </div>
        </div>
        <div 
        style={{
          padding:"15px 0",
          margin:"0 20px",
          height:"50%"
        }}>
          <p>
          SMETA is the world's most widely used audit. 
          Businesses use SMETA to understand and make improvements to working conditions and environmental performance in their business and supply chain.
          </p>
        </div>
  </div>

  <div 
    style={{
      background:"white",
      fontSize:14,
      width:"40%",
      height:500,
    }}
    className="font-handlee bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div style={{
          display:"flex",
          justifyContent:"center",
          height:"50%"
        }} >
        <div>
        <Image 
            className="w-full h-auto mt-10"
            width="0"
            height="0"
            sizes="100vw"
            src="https://mavunobios.co.ke/wp-content/uploads/2021/10/organic_farming_logo-300x200-1.jpg" 
            // src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" 
            alt="Partners Images" />
            
        </div>
        </div>
        <div 
        style={{
          padding:"15px 0",
          margin:"0 20px",
          height:"50%"
        }}>
          <p>
          Organic farming, agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal.
          </p>
        </div>
  </div>

    </div>
    </div>
    </>
  )
}
