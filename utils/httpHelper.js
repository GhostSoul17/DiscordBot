export default (route, method, payload) => fetch(route, {
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
});