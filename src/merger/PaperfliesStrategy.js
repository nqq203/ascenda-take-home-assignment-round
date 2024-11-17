const SupplierStrategy = require('./strategies/SupplierStrategy');

class PaperfliesStrategy extends SupplierStrategy {
  format(supplierData) {
    return supplierData.map(data => ({
      id: data.hotel_id,
      destination_id: data.destination_id,
      name: data.hotel_name,
      location: {
        lat: null,
        lng: null,
        address: data.location.address,
        city: null,
        country: data.location.country,
      },
      description: data.details,
      amenities: {
        general: data.amenities.general.map(d => d.toString().toLowerCase()) || [],
        room: data.amenities.room.map(d => d.toString().toLowerCase()) || [],
      },
      images: {
        rooms: data.images && data.images.rooms ? data.images.rooms.map(d => ({
          link: d.link,
          description: d.caption
        })) : [],
        site: data.images && data.images.site ? data.images.site.map(d => ({
          link: d.link,
          description: d.caption,
        })) : [],
        amenities: [],
      },
      booking_conditions: data.booking_conditions,
    }));
  }
}

module.exports = PaperfliesStrategy;