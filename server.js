const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const userRoutes = require('./routes/userRoutes')



const app = express()


dotenv.config()


app.set('port', process.env.PORT || 3001);


app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(passport.initialize());


app.use('/user', userRoutes)



 mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
   
  )
  .then(() => {
    console.log('connected to the database.');
  })
  .catch((error) => {
    console.log('database connection error.', error);
  });


app.listen(app.get('port'), () => {
  console.log("Server started on port " + app.get('port'));
});