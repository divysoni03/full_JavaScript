// 5. Vehicle Information:
//     - Create an object to store information about a vehicle, including make, model, and year.
//     - Access and display the vehicle's make and model.
//     - Modify the vehicle's year.
//     - Add a new property to store the vehicle's color.
//     - Remove the model property.

var Vehicle  = {
    vehicleName : "BMW",
    vehicleModel : "BMW m2 caupe",
    vehicleYear : 2023,
    vehiclePrice : 99_90_000,
}

console.log(`Vehicle Details\nVehicle Brand Name:${Vehicle.vehicleName},\nVehicle Model :${Vehicle.vehicleModel},\nVehicle Year :${Vehicle.vehicleYear},\nVehicle Price :${Vehicle.vehiclePrice}`);

Vehicle.vehicleYear = 2024;
console.log(`--After Update--\nVehicle Details\nVehicle Brand Name:${Vehicle.vehicleName},\nVehicle Model :${Vehicle.vehicleModel},\nVehicle Year :${Vehicle.vehicleYear},\nVehicle Price :${Vehicle.vehiclePrice}`);

Vehicle.vehicleColor = "Sky Blue";
console.log(`--After Update--\nVehicle Details\nVehicle Brand Name:${Vehicle.vehicleName},\nVehicle Model :${Vehicle.vehicleModel},\nVehicle Year :${Vehicle.vehicleYear},\nVehicle Price :${Vehicle.vehiclePrice}`);

delete Vehicle.vehicleModel;
console.log(`--After Update--\nVehicle Details\nVehicle Brand Name:${Vehicle.vehicleName},\nVehicle Model :${Vehicle.vehicleModel},\nVehicle Year :${Vehicle.vehicleYear},\nVehicle Price :${Vehicle.vehiclePrice}`);
