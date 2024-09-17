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

 const user = await User.findById(userId);

 const isBookmarked = user.bookmarks.includes(propertyId);

 let message;

 if(isBookmarked) {
   // if already bookmarked, then remove
   
 }
}

export default bookmarkProperty;