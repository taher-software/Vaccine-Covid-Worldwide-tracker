import { loadingStart } from "../Action/action";
import { loadingFailed } from "../Action/action";
import { loadingData } from "../Action/action";

const url = 'https://covid-api.mmediagroup.fr/v1/vaccines';
const fetchData = () => fetch(url);

const getVaccineData = () => (dispatch) => {
  dispatch(loadingStart());
  fetchData()
    .then((resp => resp.json()))
    .then((data) => dispatch(loadingData(data)))
    .catch((err) => dispatch(loadingFailed(err.message)))
};
export default getVaccineData;