const express = require('express');
const app = express();
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

app.use(express.json());
app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
