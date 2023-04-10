import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from "@/db/supabaseClient";



type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log(req)
  res.status(200).json({ name: 'John Doe' })
}
