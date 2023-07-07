//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// create a new Express application instance
const app = express();
//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());
//start application server on port 3000
app.listen(6969, () => {
    console.log("The server started on port 6969");
});
// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
        user: 'ferdiannovendra16@gmail.com',
        pass: 'tfltbkyelkiwybnh'
        }
    });
    const mailOptions = {
        from: 'no-reply@ikaubaya',
        to: 'novenderabintangif@gmail.com',
        subject: 'Wkwkwk',
        html: "<h1>And here is the place for HTML</h1>"
    };
    transporter.sendMail(mailOptions, (err, message) => {
        if (!err) {
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    });
});