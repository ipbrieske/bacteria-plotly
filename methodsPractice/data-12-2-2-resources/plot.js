var sortedCities = cityGrowths.sort((a, b) => 
    a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0, 5);