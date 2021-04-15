const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;
//process.env.port means it's okay with whatever port heroku gives us, but the local will be 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

      
      // Starts the server to begin listening
      
      app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));