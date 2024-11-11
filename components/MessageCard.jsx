const MessageCard = ({ message }) => {
    return <div className='relative bg-white p-4 rounded-md shadow-md border border-gray-200'>
        <h2 className="text-xl mb-4">
            <span className="font-bold">Property Inquiry:</span>{ ' ' }
            {message.property.name}
        </h2>
        <p className="text-gray-700">
            {message.body}
        </p>
    </div>;
}
 
export default MessageCard;