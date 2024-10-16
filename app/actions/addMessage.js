'use server';
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";



async function addMessage(formData) {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

    const recipient = formData.get('recipient');

    if (userId === recipient) {
        return {error: 'You can not send a message to yourself'}
    }

    const newMessage = new Message({
        sender: userId,
        recipient,
        
    });
}

export default addMessage;