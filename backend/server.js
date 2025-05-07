const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(bodyParser.json());
app.use(cors());

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = "mongodb://localhost:27017/AmitDental"; 
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Appointment schema and model
const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    reason: { type: String, required: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// Consultation schema and model
const consultationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    message: { type: String },
});

const Consultation = mongoose.model("Consultation", consultationSchema);
// Question schema and model
const questionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    question: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });
  
  const Question = mongoose.model('Question', questionSchema);
// Contact schema and model
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Subscriber schema and model
const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
//user
const UserSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
  });
  
  const User = mongoose.model('User', UserSchema);
  
//referral

  const referralSchema = new mongoose.Schema({
    patientName: String,
    patientAge: Number,
    patientPhone: String,
    patientEmail: String,
    referringDentistName: String,
    referringDentistPhone: String,
    reasonForReferral: String,
  });
  
  const Referral = mongoose.model('Referral', referralSchema);

// Routes for Appointments
app.post("/api/appointments", async (req, res) => {
    const { name, email, phone, date, time, reason } = req.body;

    if (!name || !email || !phone || !date || !time || !reason) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const newAppointment = new Appointment({ name, email, phone, date, time, reason });
        await newAppointment.save();
        res.status(201).json({ message: "Appointment request submitted successfully." });
    } catch (err) {
        console.error("Error saving appointment:", err);
        res.status(500).json({ message: "An error occurred while submitting your request." });
    }
});

app.get("/api/appointments", async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (err) {
        console.error("Error fetching appointments:", err);
        res.status(500).json({ message: "Failed to fetch appointments." });
    }
});

app.put("/api/appointments/:id", async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found." });
        }
        res.status(200).json({ message: "Appointment updated successfully." });
    } catch (err) {
        console.error("Error updating appointment:", err);
        res.status(500).json({ message: "Failed to update appointment." });
    }
});

app.delete("/api/appointments/:id", async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: "Appointment not found." });
        }
        res.status(200).json({ message: "Appointment deleted successfully." });
    } catch (err) {
        console.error("Error deleting appointment:", err);
        res.status(500).json({ message: "Failed to delete appointment." });
    }
});

// Routes for Consultations
app.post("/api/consultations", async (req, res) => {
    const { name, email, phone, date, message } = req.body;

    if (!name || !email || !phone || !date) {
        return res.status(400).json({ message: "All required fields must be filled." });
    }

    try {
        const newConsultation = new Consultation({ name, email, phone, date, message });
        await newConsultation.save();
        res.status(201).json({ message: "Consultation request submitted successfully." });
    } catch (err) {
        console.error("Error saving consultation:", err);
        res.status(500).json({ message: "An error occurred while submitting your request." });
    }
});

app.get("/api/consultations", async (req, res) => {
    try {
        const consultations = await Consultation.find();
        res.status(200).json(consultations);
    } catch (err) {
        console.error("Error fetching consultations:", err);
        res.status(500).json({ message: "Failed to fetch consultations." });
    }
});

app.put("/api/consultations/:id", async (req, res) => {
    try {
        const updatedConsultation = await Consultation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedConsultation) {
            return res.status(404).json({ message: "Consultation not found." });
        }
        res.status(200).json({ message: "Consultation updated successfully." });
    } catch (err) {
        console.error("Error updating consultation:", err);
        res.status(500).json({ message: "Failed to update consultation." });
    }
});

app.delete("/api/consultations/:id", async (req, res) => {
    try {
        const deletedConsultation = await Consultation.findByIdAndDelete(req.params.id);
        if (!deletedConsultation) {
            return res.status(404).json({ message: "Consultation not found." });
        }
        res.status(200).json({ message: "Consultation deleted successfully." });
    } catch (err) {
        console.error("Error deleting consultation:", err);
        res.status(500).json({ message: "Failed to delete consultation." });
    }
});
// API endpoint to handle form submissions
app.post('/api/questions', async (req, res) => {
    const { name, email, question } = req.body;
  
    if (!name || !email || !question) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const newQuestion = new Question({ name, email, question });
      await newQuestion.save();
      res.status(201).json({ message: 'Question submitted successfully.' });
    } catch (err) {
      console.error('Error saving question:', err);
      res.status(500).json({ message: 'Failed to save the question.' });
    }
  });
  
  // API to fetch all questions
  app.get('/api/questions', async (req, res) => {
    try {
      const questions = await Question.find();
      res.status(200).json(questions);
    } catch (err) {
      console.error('Error fetching questions:', err);
      res.status(500).json({ message: 'Failed to fetch questions.' });
    }
  });

// API endpoint to handle contact form submissions
app.post('/api/contacts', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All required fields must be filled.' });
    }

    try {
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        res.status(201).json({ message: 'Your message has been submitted successfully. We will get back to you soon!' });
    } catch (err) {
        console.error('Error saving contact message:', err);
        res.status(500).json({ message: 'Failed to save the contact message.' });
    }
});

// API to fetch all contact messages (optional for admin purposes)
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        console.error('Error fetching contact messages:', err);
        res.status(500).json({ message: 'Failed to fetch contact messages.' });
    }
});

// API endpoint to handle subscribing
app.post('/api/subscribers', async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }
  
    try {
      // Check if email already exists in the database
      const existingSubscriber = await Subscriber.findOne({ email });
  
      if (existingSubscriber) {
        return res.status(400).json({ message: 'You are already subscribed.' });
      }
  
      // Add new subscriber to the database
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
  
      res.status(201).json({ message: 'Successfully subscribed!' });
    } catch (err) {
      console.error('Error subscribing:', err);
      res.status(500).json({ message: 'Failed to subscribe.' });
    }
  });
  
  // API endpoint to handle unsubscribing
  app.post('/api/unsubscribe', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }
  
    try {
      const subscriber = await Subscriber.findOneAndDelete({ email });
  
      if (!subscriber) {
        return res.status(404).json({ message: 'Email not found in the subscription list.' });
      }
  
      res.status(200).json({ message: 'Successfully unsubscribed!' });
    } catch (err) {
      console.error('Error unsubscribing:', err);
      res.status(500).json({ message: 'Failed to unsubscribe.' });
    }
  });

  // Signup Route
app.post('/api/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(500).send({ error: 'Signup failed!' });
    }
  });
  
  // Login Route
  app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(401).send({ error: 'Invalid credentials!' });
      }
    } catch (error) {
      res.status(500).send({ error: 'Login failed!' });
    }
  });
  // Endpoint to save referral data
app.post('/submit-referral', async (req, res) => {
    try {
      const { patientName, patientAge, patientPhone, patientEmail, referringDentistName, referringDentistPhone, reasonForReferral } = req.body;
  
      // Save the referral to the database
      const referral = new Referral({
        patientName,
        patientAge,
        patientPhone,
        patientEmail,
        referringDentistName,
        referringDentistPhone,
        reasonForReferral,
      });
  
      await referral.save();
      res.status(201).json({ message: 'Referral data saved successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving referral data' });
    }
  });   
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });