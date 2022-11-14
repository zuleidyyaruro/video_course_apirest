const app = require('./app');
const db = require('./utils/database');
const initModels = require('./models/initModels');

initModels();

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch((error) => console.log(error))

db.sync({force: true})
    .then(() => console.log('Database synced'))
    .catch((error) => console.log(error))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('App running on port ', PORT)
})
