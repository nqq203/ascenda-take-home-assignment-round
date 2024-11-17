class HotelMerger {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  formatData(hotels) {
    return this.strategy.format(hotels);
  }

  mergeData(hotels) {
    const merged = new Map();

    hotels.forEach(hotel => {
      if (!merged.has(hotel.id)) {
        merged.set(hotel.id, hotel);
      } else {
        const existingHotel = merged.get(hotel.id);
        this.mergeHotelData(existingHotel, hotel);
        merged.set(hotel.id, existingHotel);
      }
    });

    return Array.from(merged.values());
  }

  mergeHotelData(existingHotel, newHotel) {
    Object.keys(newHotel).forEach(key => {
      if (typeof newHotel[key] === 'object' && newHotel[key] !== null) {
        if (Array.isArray(newHotel[key])) {
          existingHotel[key] = this.mergeArraysWithDetail(existingHotel[key] || [], newHotel[key]);
        } else {
          existingHotel[key] = existingHotel[key] ? this.mergeHotelData(existingHotel[key], newHotel[key]) : newHotel[key];
        }
      } else if (existingHotel[key] === undefined || existingHotel[key] === null) {
        existingHotel[key] = newHotel[key];
      } else if (typeof newHotel[key] === 'string' && typeof existingHotel[key] === 'string') {
        if (newHotel[key].length > existingHotel[key].length) {
          existingHotel[key] = newHotel[key];
        }
      }
    });
    return existingHotel;
  }

  mergeArraysWithDetail(existingItems, newItems) {
    return [...new Set([...existingItems, ...newItems])];
  }

}

module.exports = HotelMerger;