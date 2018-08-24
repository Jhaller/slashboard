import axios from 'axios';
import { getIdToken } from './AuthService';

const BASE_URL = 'http://localhost:8000';
const requestHeaders = { headers: { Authorization: `Bearer ${getIdToken()}` } };

export { getAllMountains, getMountain };

function getAllMountains() {
  const url = `${BASE_URL}/api/mountains`;
  return axios.get(url, requestHeaders).then(response => response.data);
}

function getMountain(mountainID) {
  const url = `${BASE_URL}/api/mountains/${mountainID}`;
  return axios.get(url, requestHeaders).then(response => response.data);
}
