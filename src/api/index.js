import axios from 'axios'

axios.defaults.baseURL = "https://api.nasa.gov/neo/rest/v1";
axios.defaults.params = {
  api_key: "PXjG2k4gTiQT1uLnemaLCDAX3RDa7jRbL69WIROx",
};

export default axios;