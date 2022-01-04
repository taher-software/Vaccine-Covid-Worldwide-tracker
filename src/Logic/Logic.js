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
  const citiesNames = allKeys.filter((city) => city !== 'All');
  const cities = [];
  citiesNames.forEach((name) => {
    cities.push({ title: name });
  });
  return cities;
};

export const mainVaccineIndicator = (data) => {
  try {
    const objectTarget = data.All;
    const indicator = [
      objectTarget.population,
      objectTarget.administered,
      objectTarget.people_vaccinated,
      objectTarget.people_partially_vaccinated,
    ];
    return indicator;
  } catch {
    return [];
  }
};
export const getCitiesNames = (data) => {
  const cities = getCities(data);
  if (cities.length === 0) return [];
  const names = [];
  cities.forEach((dt) => {
    names.push(dt.title);
  });
  return names;
};
export const getRegionData = (data, city) => {
  try {
    const cityData = data[city];
    return (cityData.administered);
  } catch {
    return 'No data available';
  }
};
