import mongoose from "mongoose";
import validator from "validator";

const rescueAnimalSchema = new mongoose.Schema({
    // Animal Description

    animalSpecie: {
        type: String,
        required: true,
        enum: ['dog', 'cat', 'bird', 'other'],
    },
    animalBreed: {
        type: String,
        required: false,
    },
    animalSize: {
        type: String,
        required: true,
        enum: ['small', 'medium', 'big'],
    },
    // Animal Condition
    petCondition: {
        type: String,
        enum: ['injured', 'sick', 'tangled', 'other'],
    },
    // Animal Location
    location: {
        type: String,
       
    },
    city: {
        type: String,
        
    },
    zip: {
        type: Number,
    },
   
    addInfoAnimal: {
        type: String,
    },
    addInfoLocation: {
        type: String,
    },
    // Applicant Name
    applicantName: {
        type: String,
        // required: true,
    },
    applicantPhone: {
        type: Number,
        // required: true,
    },
    applicantEmail: {
        type: String,
        // required: true,
    },
    animalPicture: {
        public_id: {
          type: String, 
          required: true,
        },
        url: {
          type: String, 
          required: true,
        },
      },
}, { timestamps: true }
);

export const RescueAnimal = mongoose.model("RescueAnimal", rescueAnimalSchema);
