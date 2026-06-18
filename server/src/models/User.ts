// Defines the User data structure in mongodb using mongoose
// Az Model is like a blueprint for every user document that will be stored in the database

import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../types/indexServer";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // No two users can have same email
      trim: true, // Remove spaces from start and end incase of users mistake
      lowercase: true, // always store emails in lowercase in the database
      match: [
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "invalid email format",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // New Users are Not admins by dafault
    },

    // Optional profile avatar stored as a cloudinary URL
    avatar: {
      type: String,
      default: "",
    },

    // we stored this so we can Delete the old avata from cloudinary when the user uploads a new one (to save storage space)
    avatarPublicId: {
      type: String,
      default: "",
    },

    // Optional contact info for faster checkout
    phone: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },
  },

  {
    timestamps: true,
  },
);

// ==== MIDDLEWARE (RUNS AUTOMATICALLY BEFORE SAVING)====
// pre("save") runs BEFORE a user document is saved to the database
//we use this to hash passwords so plain text is NEVER STORED
userSchema.pre("save", async function () {
  // This refers to the user being saved
  //only hash if the password was actually changed
  // this prevents re-hashing an already hashed password
  if (!this.isModified("password")) {
    return;
  }

  //bcrypt create a random "salt" (extra random data) // install bcrypt both typescript n js versions
  const salt = await bcrypt.genSalt(10); // The "10" is the cost factor - higher = more secure but slower

  // Hash the password with the salt
  this.password = await bcrypt.hash(this.password, salt);
});

// ===== Method (Custom function on user document) ===
// Compare an entered plain-text password with the stored hash
// Return true if they match, false if they dont
userSchema.methods.matchPassword = async function (
  enteredPassword: string,
): Promise<boolean> {
  //bcrypt.compare handles the comparison safely
  return await bcrypt.compare(enteredPassword, this.password);
};

//Create and export the User model
//mongoose.model("User", userSchema) creates a model named "User"
// MongoDB wil store documents in a collection called "users" (auto-pluralized)

const User = mongoose.model<IUser>("User", userSchema);

export default User;
