require('dotenv').config();
const express = require('express');
const app = express();

const router = require("./routes/page");
const paymentrouter = require("./routes/payment");

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use('/', router);
app.use('/payment', paymentrouter);

app.listen(PORT, function() {
  console.log(`Server is running it http://localhost:${PORT}`);
});