const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

require('./startup') (app) // this is the startup file

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`jobList_app is running on PORT ${PORT}`);

})