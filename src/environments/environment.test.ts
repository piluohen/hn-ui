const address = window.location.hostname;

export const environment = {
  production: true,
  LOGIN_URL: `http://${address}/iotPlant/#/`,
  baseUrl: '/ipark-esp/'
};
