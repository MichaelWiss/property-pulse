import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";

const SearchResultsPage = async ({ searchParams: { location, propertyType } }) => {
    await connectDB();

    const locationPattern = new RegExp(location, 'i');

    let query = {
        $or: [
            {name: locationPattern},
            {description: locationPattern},
            {location.street: locationPattern},
        ]
    }

    return <div>Search Results</div>
};
 
export default SearchResultsPage;