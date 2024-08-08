const InfoBox = ({ heading, children }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">{ heading }</h2>
              <p className="mt-2 mb-4">
                {children}
              </p>
              <a
                href="/properties.html"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Properties
              </a>
            </div>
    );
}
 
export default InfoBox;