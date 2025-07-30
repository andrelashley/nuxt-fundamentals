export default defineEventHandler((event) => {
  return getProducts();
})


function getProducts() {
  return [
    { name: 'Rocket Ship', price: 129540.90 },
    { name: 'Space Port', price: 75030000 },
    { name: 'Warp Engine', price: 125900999 },
    { name: 'Transport Pad', price: 450900 },
    { name: 'Ion Thruster', price: 320000.99 },
    { name: 'Lunar Habitat', price: 2500000.00 },
    { name: 'Asteroid Mining Rig', price: 8900000 },
    { name: 'Mars Terraformer', price: 999999999 },
    { name: 'Quantum Core', price: 550000 },
    { name: 'Galactic Beacon', price: 1250000.75 }
  ];
}