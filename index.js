// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const newArray = drivers.filter(function(driver) {
    return driver.revenue > revenue
  });
  return newArray;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const specificDrivers = driversWithRevenueOver(drivers, revenue);
  const newArray = specificDrivers.map(function(driver) {
    return driver.name
  });
  return newArray;
}

function exactMatch(drivers, attribute) {
  key = Object.keys(attribute)[0];
  value = attribute[key];
  const newArray = drivers.filter(function(driver) {
    return driver[key] === value;
  });
  return newArray
}

function exactMatchToList(drivers, attribute) {
  const specificDrivers = exactMatch(drivers, attribute);
  const newArray = specificDrivers.map(function(driver) {
    return driver.name
  });
  return newArray;
}
