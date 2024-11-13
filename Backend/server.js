const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

  // Load environment variables
  dotenv.config();

  // Connect to database
  connectDB();

  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Hero Endpoint
  const heroEndpoint = require("./routes/hero");
  app.use("/hero", heroEndpoint);
  
  // Alumni Slider Endpoint
  const alumniSliderEndpoint = require("./routes/alumniSlider");
  app.use("/alumnislider", alumniSliderEndpoint);
  
  // Image Thumbnail Endpoint
  const imgThumbnailEndpoint = require("./routes/imgThumbnail");
  app.use("/imgthumbnail", imgThumbnailEndpoint);
  
  // Question Endpoint
  const questionEndpoint = require("./routes/question");
  app.use("/question", questionEndpoint);
  
  // Timeline Endpoint
  const timelineEndpoint = require("./routes/timeline");
  app.use("/timeline", timelineEndpoint);
  
  // Home Slider Endpoint
  const homeSliderEndpoint = require("./routes/homeSlider");
  app.use("/homeslider", homeSliderEndpoint);
  
  // Team Profile Endpoint
  const teamProfileEndpoint = require("./routes/teamProfile");
  app.use("/teamprofile", teamProfileEndpoint);
  
  // Testimony Endpoint
  const testimonyEndpoint = require("./routes/testimony");
  app.use("/testimony", testimonyEndpoint);
  
  // Gallery Endpoint
  const galleryEndpoint = require("./routes/gallery");
  app.use("/gallery", galleryEndpoint);
  
  // Newsletter Endpoint
  const newsletterEndpoint = require("./routes/newsletter");
  app.use("/newsletter", newsletterEndpoint);
  
  // Enquiry Endpoint
  const enquiryEndpoint = require("./routes/enquiry");
  app.use("/enquiry", enquiryEndpoint)
  ;
  // Alumni Form Endpoint
  const alumniFormEndpoint = require("./routes/alumniForm");
  app.use("/alumniForm", alumniFormEndpoint);
  
  // Mount the /cloudinary route
  const cloudinaryRoute = require('./routes/cloudinaryRoute');
  app.use('/cloudinary', cloudinaryRoute);

  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });