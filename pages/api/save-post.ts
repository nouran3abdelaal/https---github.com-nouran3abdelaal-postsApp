import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import {posts } from "../../data";

export default async function handler (req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'POST') {
    // const data = fs.readFileSync("D:/Internships/Noon/noonv2/data.js", 'utf8');
    const post  = await req.body;
    console.log("req.body");
    console.log(req.body);
   // console.log(posts.find((d: { id: any; }) => d.id === post.id));
    let index = posts.findIndex((d: { id: any; }) => d.id === post.id);
    let row = posts.find((d: { id: any; }) => d.id === index);

   if(post.liked){
    post.liked=false;
    console.log("hhhhhhhhhhhhhhhhh"+post);
   }
   
   
   else{
    post.liked=true;
    console.log("jjjjjjjjjjjjjjjj"+post);
   }

    if (index !== -1) {
      // Remove the old element and insert the updated element at the same position
      posts.splice(index, 1, post);
    }
    const jsonPosts = `export const posts =  ${JSON.stringify(posts, null, 2)};`;

    // Write the JSON string to the file
    try {
      await new Promise((resolve, reject) => {
        fs.writeFile('D:/Internships/Noon/noonv2/data.js', jsonPosts, (err) => {
          if (err) {
            reject(err);
          } else {
          //  resolve();
          }
        });
      });
      res.status(200).json({ message: 'Post updated successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update post' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
  