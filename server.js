// Don't use this in production code. Study purpose only.
const express = require('express');
const app = express();

app.use(express.static('./'));

app.listen(3000, () => console.log('Server is listerning on port 3000'));
