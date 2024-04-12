import http from 'k6/http';

export const options = {

  discardResponseBodies: true,

  scenarios: {

    contacts: {

      executor: 'ramping-vus',

      startVUs: 0,

      stages: [

        { duration: '30s', target: 100 },

        { duration: '10s', target: 0 },

      ],

      gracefulRampDown: '0s',

    },

  },

};


export default function () {

  http.get('http://mesher.api/api/GeometryNonSampled/GenerateVertices');
}