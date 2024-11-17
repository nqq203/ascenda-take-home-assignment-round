const axios = require('axios');
const HotelMerger = require('../merger/context/HotelMerger');
const StrategyFactory = require('../merger/factory/StrategyFactory');

class HotelService {
  constructor() {
    this.hotelMerger = new HotelMerger();
  }

  async fetchDataFromSuppliers(urls) {
    const responses = await Promise.all(urls.map(url => axios.get(url)));

    const formattedData = responses.map((response, index) => {
      const supplierName = this.extractSupplierNameFromURL(urls[index]);
      const strategy = StrategyFactory.getStrategy(supplierName);
      this.hotelMerger.setStrategy(strategy);
      return this.hotelMerger.formatData(response.data);
    });

    return this.hotelMerger.mergeData(formattedData.flat());
  }

  extractSupplierNameFromURL(url) {
    const urlParts = url.split('/');
    const supplierName = urlParts[urlParts.length - 1];
    return supplierName;
  }
}

module.exports = HotelService;