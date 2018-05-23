import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export { getAllMountains, getMountain };

function getAllMountains() {
  const url = `${BASE_URL}/api/mountains`;
  return axios.get(url).then(response => response.data);
}

function getMountain(mountainID) {
  const url = `${BASE_URL}/api/mountains/${mountainID}`;
  return axios.get(url).then(response => response.data);
}
