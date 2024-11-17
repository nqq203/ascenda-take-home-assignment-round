const SupplierStrategy = require('./strategies/SupplierStrategy');

class PatagoniaStrategy extends SupplierStrategy {
  format(supplierData) {
    return supplierData.map(data => ({
      id: data.id,
      destination_id: data.destination,
      name: data.name,
      location: {
        lat: data.lat || null,
        lng: data.lng || null,
        address: data.address || null,
        city: null,
        country: null,
      },
      description: data.info || null,
      amenities: {
        general: [],
        room: data.amenities ? data.amenities.map(d => d.toString().toLowerCase()) : [],
      },
      images: {
        rooms: data.images && data.images.rooms ? data.images.rooms.map(d => ({
          link: d.url,
          description: d.description
        })) : [],
        site: [],
        amenities: data.images && data.images.amenities ? data.images.amenities.map(d => ({
          link: d.url,
          description: d.description
        })) : [],
      },
      booking_conditions: [],
    }));
  }
}

module.exports = PatagoniaStrategy;