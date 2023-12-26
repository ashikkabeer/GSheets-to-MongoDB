const { managedidentities_v1alpha1 } = require('googleapis');
const { testGetSpreadSheetValues } = require('./test');
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI;

// Define a Mongoose Schema for the Person model
const personSchema = new mongoose.Schema({
  name: String,
  batch: Number,
  branch: String,
  pronoun: String,
  language: [String],
  domain: String,
  experience: String,
  email: String,
  computer: String,
  phone: String,
  whatsapp_id: String,
});

// Create a Mongoose model based on the schema
const Person = mongoose.model('Person', personSchema);

testGetSpreadSheetValues().then((data) => {
  async function insertData() {
    try {
      await mongoose.connect(uri);
      for (let i = 0; i < data[0].length; i++) {
        const languageString = data[4][i];
        const languageArray = languageString.split(',');

        const person = new Person({
          name: data[0][i],
          batch: data[1][i],
          branch: data[2][i],
          pronoun: data[3][i],
          language: languageArray,
          domain: data[5][i],
          experience: data[6][i],
          email: data[7][i],
          computer: data[8][i],
          phone: data[9][i],
          whatsapp_id: data[10][i],
          // names,sem,branch,pronoun,language,domain,experience,email,computer,phone
        });
        await person.save();
      }

      console.log('Data inserted successfully.');
    } finally {
      mongoose.disconnect();
    }
  }

  insertData().catch(console.error);
});
