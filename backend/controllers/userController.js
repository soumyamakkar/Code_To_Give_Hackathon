import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

exports.registerUser = async (req,res)=>{
    console.log("sign up called");
  try {
    const { username, email, password, role } = req.body;
    console.log(
      "Data received from frontend: ",
      username,
      email,
      password,
      role
    );

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password before storing in DB
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user and store him in backend
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();
    console.log("The user entered in db: ", savedUser);

    // Generate token
    const token = jwt.sign(
      {
        userId: savedUser._id,
        username: savedUser.username,
        role: savedUser.role,
      },
      JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error("Error in creating a new user", error);
    res.status(500).json({ message: "Error in creating a new user" });
  }
}




exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Data received from frontend: ", email, password);
  
      // Check if the user exists in database?
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "User with such email doesn't exist" });
      }
  
      // Compare provided password with hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect password" });
      }
  
      // Generate a token
      const token = jwt.sign(
        {
          userId: user._id,
          username: user.username,
          role: user.role,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
  
      // Now the email and password are both valid, so sign in the user
      res.status(200).json({
        message: "User logged in successfully",
        token,
      });
    } catch (error) {
      console.error("Error in logging in user", error);
      res.status(500).json({ message: "Error in loggingg in user" });
    }
  };
  