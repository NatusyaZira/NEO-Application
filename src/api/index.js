import axios from 'axios'

axios.defaults.baseURL = "https://api.nasa.gov/neo/rest/v1";
axios.defaults.params = {
  api_key: "QJw6KzeVg1tpq09CA66NX4ICKPBBhuzPK9RqzzWI",
};

export default axios;