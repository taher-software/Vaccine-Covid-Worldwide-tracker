import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { mainVaccineIndicator } from '../../Logic/Logic';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const CountryVaccinationChart = (props) => {
  const { countryData } = props;
  const mainData = mainVaccineIndicator(countryData);
  const country = useSelector((state) => state.country);
  const data = {
    labels: ['population', 'administered', 'people_vaccinated', 'people_partially_vaccinated'],
    datasets: [
      {
        label: `${country} Latest Vaccine Data`,
        fille: false,
        lineTension: 0.5,
        backgroundColor: 'rgb(67, 105, 178)',
        borderColor: 'rgba(67, 105, 178, 0.5)',
        borderWidth: 1,
        data: mainData,
      },
    ],
  };
  return (
    <div style={{ height: '200px', paddingBottom: '20px' }}>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
          scales: {
            y: {
              display: true,
            }
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

CountryVaccinationChart.propTypes = {
  countryData: PropTypes.instanceOf(Object).isRequired,
};
export default CountryVaccinationChart;
