import React from 'react'
import connectDB from '@/config/database';
import Message from '@/models/message';
import '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import { getSessionUser } from '@/utils/getSessionUser';

export default function MessagesPage() {
    connectDB();

    const sessionUser = await getSessionUser();

    const { userId } = sessionUser;

    const readMessages  = await Message.find({ recipient: userId, read: true })


  return (
    <div>MessagesPage</div>
  )
}
