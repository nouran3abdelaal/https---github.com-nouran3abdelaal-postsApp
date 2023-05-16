// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {posts } from "../../data";
type Data = {
  name: string
}
  

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { author: string; description: string; tags: string[]; images: string[]; }[]): void; new(): any; }; }; }) {
  res.status(200).json(posts)
}
