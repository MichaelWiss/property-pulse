'use server';
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
 await connectDB();

 const sessionUser = await getSessionUser();

 if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required');
 }

 const { userId } = sessionUser;

 let message;

 


}

export default bookmarkProperty;