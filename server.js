const express = require('express');
const mysql = require('mysql2');
PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MYSQL username,
        user: 'root',
        // Your MYSQL password
        password: '1hyh9jaf',
        database: 'election'
    },
    console.log('Connected to the election database.')
);



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});