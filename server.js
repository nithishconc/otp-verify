const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cookieParser = require('cookie-parser');
const app = express();
// const client = require('twilio')(process.env.accountSid, process.env.authToken);

const port  =  process.env.PORT ||  5000
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// // Generate OTP function
// function generateOTP() {
//     const digits = '0123456789';
//     let OTP = '';
//     for (let i = 0; i < 6; i++) {
//         OTP += digits[Math.floor(Math.random() * 10)];
//     }
//     return OTP;
// }

// // Hash function for storing OTPs securely
// function hashOTP(otp) {
//     const secret = process.env.secretKey; // Your secret key from environment variables
//     const hash = crypto.createHmac('sha256', secret)
//                      .update(otp)
//                      .digest('hex');
//     return hash;
// }

// Route for sending OTP

app.get("/testing",(req,res) => {
res.status(200).send("testing")
})


// app.post("/send-otp", (req, res) => {
//     const otp = generateOTP();
//     const hashedOTP = hashOTP(otp);
//     const phoneNumber = req.body.to; // Assuming phone number is sent in the request body
//     // Store hashed OTP securely in cookie
//     res.cookie('otp_' + phoneNumber, hashedOTP, { httpOnly: true, maxAge: 30 * 60 * 1000 });
//     // Send OTP via Twilio
//     client.messages
//         .create({
//             body: `Your OTP is: ${otp}`,
//             to: phoneNumber,
//             from: process.env.from, // Use your Twilio phone number
//         })
//         .then((message) => {
//             console.log(`OTP sent successfully SID: ${message.sid}`);
//             res.status(200).json({ success: true, message: "OTP sent successfully." });
//         })
//         .catch((error) => {
//             console.error('Error sending OTP:', error);
//             res.status(500).json({ success: false, error: "Failed to send OTP." });
//         });
// });

// // Route for verifying OTP
// app.post("/verify-otp", (req, res) => {
//     const enteredOTP = req.body.otp;
//     const phoneNumber = req.body.to; // Assuming phone number is sent in the request body
//     const storedOTP = req.cookies['otp_' + phoneNumber];

//     if (!storedOTP) {
//         return res.status(400).json({ success: false, message: "No OTP found for the given phone number." });
//     }

//     const hashedEnteredOTP = hashOTP(enteredOTP);

//     if (hashedEnteredOTP === storedOTP) {
//         // Clear the OTP after successful verification
//         res.clearCookie('otp_' + phoneNumber);
//         res.status(200).json({ success: true, message: "OTP verified successfully." });
//     } else {
//         res.status(400).json({ success: false, message: "Invalid OTP. Please try again!!!!." });
//     }
// });

app.listen( port, () => {
    console.log("Server running at http://localhost:8080!");
});