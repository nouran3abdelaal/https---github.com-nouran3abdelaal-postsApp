import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./Components/NavBar";
import react, {useState,useEffect} from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");

  //   mediaQuery.addEventListener("change", () => {
  //     setIsSmallScreen(mediaQuery.matches);
  //   });

    // return () => {
    //   mediaQuery.removeEventListener("change");
    // };
  // }, []);
  return (

    <div>
       <NavBar />
         {/* {!isSmallScreen ? (
       
      ) : (   <NavBar/>) */}

<Component {...pageProps} />
</div>
  )
  
  
}
