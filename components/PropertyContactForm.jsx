'use client';
import { useEffect } from "react";
import { useActionState } from "react";
import { useFormStatus} from 'react-dom';
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import addMessage from "@/app/actions/addMessage";
import { FaPaperPlane } from "react-icons/fa";

const PropertyContactForm = ({ property }) => {
    const { data: session } = useSession();

    const {state, formAction} = useFormStatus(addMessage, {});

    if (state.submitted) {
      return 
        <p className="text-green-500 mb-4">Your message has been sent</p>;
    }

    return (
      session && (
      <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
    <form>
    <input 
        type="hidden" 
        id="property" 
        name="property" 
        defaultValue={property._id}
      />
       <input 
        type="hidden" 
        id="recipient" 
        name="recipient" 
        defaultValue={property._owner}
      />
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        for='name'
      >
        Name:
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='name'
        type='text'
        placeholder='Enter your name'             
        required
      />
    </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="email"
        >
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          for='phone'
        >
          Phone:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='phone'
          type='text'
          placeholder='Enter your phone number'
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="message"
        >
          Message:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
          type="submit"
        >
          <FaPaperPlane className="mr-2"/> Send Message
        </button>
      </div>
    </form>
  </div>
    )
  );
};
 
export default PropertyContactForm;