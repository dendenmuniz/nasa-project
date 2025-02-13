const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./utils/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

require('dotenv').config({ path: './.env' });
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();
  http.createServer({
    key: '',
    
  }).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
