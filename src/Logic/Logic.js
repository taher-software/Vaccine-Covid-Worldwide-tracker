export const globalRateVaccination = (data) => {
  try {
    let totalVaccination = 0;
    let totalPopulation = 0;
    const country = Array.from(Object.keys(data));
    country.forEach((ctr) => {
      const targetData = data[ctr].All;
      if (targetData.population && targetData.people_vaccinated) {
        totalPopulation += targetData.population;
        totalVaccination += targetData.people_vaccinated;
      }
    });
    return Math.floor((totalVaccination / totalPopulation) * 100);
  } catch {
    return 'Waiting data...';
  }
};

export const countryRateVaccination = (data, country) => {
  try {
    const selectedData = data[country].All;
    const { population } = selectedData;
    const vaccinated = selectedData.people_vaccinated;
    if (population === 0 || vaccinated === undefined || population === undefined) return 'No data available...';
    return Math.floor((vaccinated / population) * 100);
  } catch {
    return 'Waiting data...';
  }
};

export const getCities = (data) => {
  const allKeys = Object.keys(data);
  if (allKeys.length === 0) return [];
  const citiesNames = allKeys.filter(city => city !== 'All');
  const cities = [];
  citiesNames.forEach((name) => {
    cities.push({title: name});
  })
  return cities;
}