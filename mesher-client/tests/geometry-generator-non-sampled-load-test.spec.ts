import { sleep } from 'k6';
import http from 'k6/http';

export const options = {

  discardResponseBodies: true,

  scenarios: {

    contacts: {

      executor: 'ramping-vus',

      startVUs: 0,

      stages: [

        { duration: '30s', target: 300 },

        { duration: '30s', target: 0 },

      ],

      gracefulRampDown: '100s',

    },

  },

};


export default function () {

  http.get('http://mesher.api/api/GeometryNonSampled/GenerateVertices');
  sleep(1);
}
