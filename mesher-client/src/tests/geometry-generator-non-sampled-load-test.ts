import http from 'k6/http';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  duration: '10s',
};

export default () => {
  const urlToHit = 'http://localhost:8080/api/GeometryNonSampled/GetArray';
  http.get(urlToHit);
}
