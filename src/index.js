const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);
/** Banco SQLite 
 * Driver: usar select
 * Query Builder: table('users').select('*').where() Knex.js
*/

app.listen(3333, () => console.log('server na porta 3333'))