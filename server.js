const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

      
      // Starts the server to begin listening
      
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));