#!/usr/bin/env node
const HotelService = require('./service/HotelService');

const suppliers = [
  'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme',
  'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia',
  'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies'
];

function parseArguments(args) {
  if (!args) return [];
  const delimiter = args.includes(',') ? ',' : ' ';
  return args.split(delimiter)
             .filter(arg => arg.trim() !== 'none')
             .map(arg => arg.trim());
}

async function main() {
  const args = process.argv.slice(2);
  const [hotelIdsArg, destinationIdsArg] = args;

  const hotelIds = parseArguments(hotelIdsArg);
  const destinationIds = parseArguments(destinationIdsArg);

  const hotelService = new HotelService();
  const hotels = await hotelService.fetchDataFromSuppliers(suppliers);
  if (destinationIds.length === 0 || hotelIds.length === 0) {
    console.log(JSON.stringify(hotels, null, 2));
  }

  const filteredHotels = hotels.filter(hotel => {
    for (let i = 0; i < hotelIds.length; i++) {
      if (hotelIds[i] === hotel.id && destinationIds[i] === hotel.destination_id.toString()) {
        return true;
      }
    }
    return false;
  });

  console.log(JSON.stringify(filteredHotels, null, 2));
}

main();