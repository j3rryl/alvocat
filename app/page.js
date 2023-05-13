import Link from "next/link";
import CubeSwiper from "./components/CubeSwiper";
import ResponsiveAppBar from "./components/ResponsiveAppbar";
import { APP_NAME } from "./utils/constants";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Accordion } from "./components/Accordion";

export default function Home() {
  const avocadoes = ["https://media.istockphoto.com/id/510015094/photo/avocado-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=DbZCos6mLkNoUisTazF-N8JVWs5jDrGkfcNT0XBHtkY=",
"https://media.istockphoto.com/id/1359819435/photo/halves-of-fresh-avocado-on-a-cutting-board.jpg?b=1&s=170667a&w=0&k=20&c=VMrEYk9r0UT6pVSqWpRjkMdSSRg-KsDaKvh2c2n_G-Y=",
"https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZvY2Fkb3xlbnwwfHwwfHw%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1449339854873-750e6913301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhY2Fkb3xlbnwwfHwwfHw%3D&w=1000&q=800",
// "https://rare-gallery.com/uploads/posts/872484-Avocado-Colored-background-Water-splash.jpg"
]

const pineapples = ["https://media.istockphoto.com/id/1371207687/photo/fresh-pineapple-fruit-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=hzWCbz7ggYTjJGYVh_5FgXzA0e3HpUbyAofHBndeszE=",
"https://media.istockphoto.com/id/182716593/photo/fresh-slice-pineapple.jpg?b=1&s=170667a&w=0&k=20&c=YiDWyJuNeCvTvPoUmG42E9Mj4PPRqdPCMwVbHSVzcBw=",
"https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1587883012610-e3df17d41270%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NXx8cGluZWFwcGxlfGVufDB8fHx8MTY4Mzg5NzU4NHww%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dpineapple%26blend%3D000000"]

const ginger = ["https://media.istockphoto.com/id/647402644/photo/ginger-root-and-ginger-powder-in-the-bowl.jpg?b=1&s=170667a&w=0&k=20&c=o_Itzs5y-0sLo_nQWijuao40qyRKk_56rqfb5xzjs_o=",
"https://images.unsplash.com/photo-1635843104103-ddd88e1c5141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpbmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
"https://media.istockphoto.com/id/889176872/photo/fresh-ginger.jpg?b=1&s=170667a&w=0&k=20&c=4lcgzVsV76FhMFy8CCl6FwJNmRvuYchhoaPq2dzSJC0=",
"https://media.istockphoto.com/id/1372776305/photo/curcuma-longa-turmeric-and-ginger-powder-rhizomes-and-tea.jpg?b=1&s=170667a&w=0&k=20&c=v8Y_QMEaHiUPDNKvv_pcx2_UObpKYFf3MRQxlccw1gw="]
return (
    <>    
    <ResponsiveAppBar/>
        <div style={{
      margin:"10px 3rem",
    }}>
      <div style={{
      fontSize:18,
      fontWeight:"bolder"
    }} className="alvocat font-handlee p-6 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-center my-1 !font-dancing text-3xl" style={{
      letterSpacing:"1rem",
      fontWeight:"bolder",
      fontSize:25,
    }}>{APP_NAME}</h1>
    <p>
    We are an agricultural company Incorporated in Kenya in 2015 and we have been in the export of organic exotic fruits since 2015.
        We partner with thousands of enthusiastic small holder farmers, selected orchardists and wild collectors to bring you the acclaimed super fruits:
        the avocado, passion fruit, mango, and the king of fruits the baobab.
        With an endowed sunny climate all year round, rich volcanic soils combined with a dedicated and competent personnel with a delicate keenness
        towards food safety assurance and quality we are delighted to fulfill your need for a natural, nutritious products that also promotes health and wellbeing. This is what excites us every day and makes us wonder in the wild
        to craft something new that enriches life.
        </p>
    </div>
    <h4 className="text-2xl !font-handlee !mt-10">Our Products</h4>
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"3rem 0"
    }}>
      <CubeSwiper imageUrls={avocadoes}/>
      <CubeSwiper imageUrls={pineapples}/>
      <CubeSwiper imageUrls={ginger}/>
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
    <h4 className="text-xl">Our Partners</h4>
    <div 
    style={{
      background:"white",
      fontSize:14,
      width:"100%",
      height:"fit-content",
      padding:"15px 15px",
      margin:"30px 0"
      
    }}
    className="font-handlee bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Accordion/>
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
    className="font-handlee bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
    <Footer/>

    </div>
    </>
  )
}
