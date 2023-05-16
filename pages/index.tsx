import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";

const inter = Inter({ subsets: ['latin'] })
import Router from 'next/router';
import react, {useState,useEffect} from "react"

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const gettingData = async ()=>{
    const reponse = await fetch('api/hello');
    const info = await reponse.json();
    console.log(info);
    setData(info);
  }
  useEffect(()=>{
    gettingData();
  });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

 

  return (
    
    <div>
      
      {/* {JSON.stringify(data[10])} */}
      {/* <NavBar/> */}
      <main>
     
        {data.map((d) => (
            // {JSON.stringify(d)}
          
           <Card 
           liked={d.liked}
           id={d.id}
            name={d.author}
            url={data[0].images[0]}
            description={d.description}
            tags={d.tags}
          />
          // <br/>
         )
        )
      }
        {/* {router.route === "/" ? (
            <h1>Home</h1>
          ) : (
            <h1>Favorites</h1>
          )} */}
      </main>
    </div>
  );
  
}
