import Script from 'next/script'
import React from 'react'
import Head from 'next/head';
import react, {useState,useEffect} from "react"
import {posts } from "../../data";

export default function Card({liked,id,name,url,description,tags}) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;

    const [count, setCount] = useState(randomNumber);
    const [clicked, setClicked] = useState(false);
    const savePost = async (liked,id,name,description,url,tags) => {
        //const post = document.getElementById(postId).textContent;
        const response = await fetch('/api/save-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            "id":id,
           
          "liked":liked,
          "author":name,
            "description":description,
            "tags":tags,
            "images":[url],
           
            
        
         })
        });
        const data = await response.json();
        console.log(data);
      };

    useEffect(() => {
        const heartIcon = document.querySelector('.card'+id);

        // heartIcons.forEach((heartIcon) => {
            if (heartIcon) {
              heartIcon.addEventListener('click', () => {
                if (clicked) {
                    setCount(count - 1);
                    setClicked(false);
                    savePost(liked,id,name,description,url,tags)
                    // var heartIcon2 = document.querySelector('.heart');
                    // heartIcon2.style.color = "blue";


                    // savePost(liked,id,name,description,url,tags);
                //   posts.find((p)=>p.id===Number(id)).liked=false;
                //   fs.writeFile("../../data", posts, (err) => {
                //     if (err) {
                //       console.log(err);
                //       return;
                //     }}
                //   )

                } else {
                    setCount(count + 1);
                    setClicked(true);
                    //savePost(liked,id,name,description,url,tags)
                  
                //   posts.find((p)=>p.id===Number(id)).liked=true;
                //   fs.writeFile("../../data", posts, (err) => {
                //     if (err) {
                //       console.log(err);
                //       return;
                //     }}
                //   )
                }
                
                console.log('clicked');
                heartIcon.classList.add('highlighted');
              });
            }
        //   });
        }, [clicked]);

    return (

    <div>
       <Head>
        <script  src="/scripts/cardScript.js" type="text/javascript"></script>
      </Head>
      <div className="card" >
      <h5 className="card-title">By {name}</h5>
        <img src={url} className="card-img-top"/>
        <p className='likes'>
        <p  className={"card"+id}>
      {/* <a href="/Favorites" as="favorites" exact>
      <i class="bi bi-heart"></i> */}
     {!clicked? <svg   className='heart' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> :<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>}  
<span class="count">{count} </span>
<span >   Likes</span>

      {/* </a> */}
      </p>
      </p>
        <div className="card-body">
          <p className="card-text">{description}</p>
          {
            tags.map((tag)=>(
                <a href="" >#{tag} </a>
            ))
          }
          <br/>          <br/>

          <a href='' className='comments'> View 12 comments</a>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      {/* <script src="pages\Components\cardScript.js" type="text/javascript"></script> */}


      {/* <Script>pages\Components\cardScript.js</Script> */}
    </div>
    
  )
}
