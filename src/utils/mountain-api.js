import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export { getAllMountains, getMountain };

function getAllMountains() {
  const url = `${BASE_URL}/api/mountains`;
  return axios.get(url).then(response => response.data);
}

function getMountain(mountainID) {
  const url = `${BASE_URL}/api/mountains/${mountainID}`;
  //return axios.get(url).then(response => response.data);
  const rep = axios.get(url);
  console.log(rep);
  console.log('that was rep');
}
