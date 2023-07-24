const server = require("./src/server");
const { conn } = require('./src/db.js');
const requestDataFromAPI = require('./src/controllers/requestDataFromAPI');

const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  requestDataFromAPI();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
