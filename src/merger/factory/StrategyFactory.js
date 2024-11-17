const AcmeStrategy = require('../AcmeStrategy');
const PatagoniaStrategy = require('../PatagoniaStrategy');
const PaperfliesStrategy = require('../PaperfliesStrategy');

class StrategyFactory {
  static getStrategy(supplierName) {
      switch (supplierName) {
          case 'acme':
              return new AcmeStrategy();
          case 'patagonia':
              return new PatagoniaStrategy();
          case 'paperflies':
              return new PaperfliesStrategy();
          default:
              throw new Error(`No strategy found for supplier: ${supplierName}`);
      }
  }
}

module.exports = StrategyFactory;
