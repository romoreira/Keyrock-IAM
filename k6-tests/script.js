import { Trend } from "k6/metrics";
import http from 'k6/http';

var ResponseTimeTrend = new Trend("responseTime");


export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '20s', target: 50 },
        { duration: '10s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};


export default function () {
  const payload = JSON.stringify({
    name: 'admin@test.com',
    password: '1234',
  });
  const headers = { 'Content-Type': 'application/json' };
  const res = http.post('http://20.81.90.222:3000/v1/auth/tokens', payload, { headers });
  console.log('Response time was '+ String(res.timings.duration) + ' ms');
  ResponseTimeTrend.add(res.timings.duration)
}
