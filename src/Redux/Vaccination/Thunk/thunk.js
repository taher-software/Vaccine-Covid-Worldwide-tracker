import { loadingStart } from "./action";
import { loadingFailed } from "./action";
import { loadingData } from "./action";

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