class SupplierStrategy { 
  // merge(hotels) {
  //   const merged = new Map();

  //   hotels.forEach(hotel => {
  //     if (!merged.has(hotel.id)) {
  //       merged.set(hotel.id, hotel);
  //     } else {
        
  //     }
  //   });

  //   return Array.from(merged.values());
  // }
  format(data) {
    throw new Error('Implement this method');
  }
}

module.exports = SupplierStrategy;