const SupplierStrategy = require('./strategies/SupplierStrategy');

class AcmeStrategy extends SupplierStrategy {
  format(supplierData) {
    return supplierData.map(data => ({
      id: data.Id,
      destination_id: data.DestinationId,
      name: data.Name,
      location: {
        lat: data.Latitude || null,
        lng: data.Longitude || null,
        address: data.Address,
        city: data.City,
        country: data.Country,
      },
      description: data.Description,
      amenities: {
        // general: data.Facilities.map(d => d.toString().toLowerCase()) || [],
        general: [],
        room: [],
      },
      images: {
        rooms: [],
        site: [],
        amenities: [],
      },
      booking_conditions: [],
    }));
  }
}

module.exports = AcmeStrategy;