import { Trend } from "k6/metrics";
import http from 'k6/http';

var ResponseTimeTrend = new Trend("responseTime");


export const options = {
  discardResponseBodies: true,
  noConnectionReuse: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '20s', target: 10000 },
        { duration: '10s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
  //thresholds: {
  //     http_req_failed: ['rate<0.01'],
  //},
};


export default function () {
  const url = 'http://20.210.36.32:3000/v1/auth/tokens';
  const payload = JSON.stringify({
    name: 'admin@test.com',
    password: '1234',
  });
   const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = http.post(url, payload, params);
  console.log('Response time was '+ String(res.timings.duration) + ' ms');
  ResponseTimeTrend.add(res.timings.duration)
}
