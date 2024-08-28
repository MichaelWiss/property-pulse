'use server';

async function addProperty(formData) {
    console.log(formData.getAll('amenities'));
    const images = formData
    .getAll('images')
    .filter((image) => image.name !== '')
    .map((image) => image.name);
    
    const propertyData = {
        type: formData.get('type'),
        name: formData.get('name'),
        description: formData.get('description'),
        location: {
            street: formData.get('location.street'),
            city: formData.get('location.city'),
            state: formData.get('location.state'),
            zipcode: formData.get('location.zipcode'),
        },
        beds: formData.get('beds'),
        name: formData.get('name'),
        name: formData.get('name'),

    };
}

export default addProperty;