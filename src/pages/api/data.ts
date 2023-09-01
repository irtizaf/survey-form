// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



import { db, newUser1, newUser2, UsersTable1, UsersTable2 } from '../../../lib/drizzle'; // Update the path
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userType = req.body;
    console.log(userType)
    let array = userType.careerchallanges
    console.log(Object.values(array))
    try {
      if (userType.selectedgender === 'male') {
        await db.insert(UsersTable1).values(userType);
      } else if (userType.selectedgender === 'female') {
        await db.insert(UsersTable2).values(userType);
      }
      res.status(201).json({ message: "form submitted" });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }


  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}