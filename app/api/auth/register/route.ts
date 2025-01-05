import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();
    console.log({ username, email, password });

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists!" },
        { status: 400 }
      );
    }

    // Encrypt password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("Saved user ID:", savedUser._id);

    // Convert ObjectId to string and send email
    if (savedUser && savedUser._id) {
      await sendEmail({
        email,
        emailType: "VERIFY",
        userId: savedUser._id.toString(),
      });
    } else {
      console.error("Failed to retrieve saved user ID.");
    }

    return NextResponse.json({
      message: "User registered successfully",
      status: true,
      savedUser,
    });
  } catch (error) {
    console.error("Error in register route:", error);
    return NextResponse.json(
      { message: "An error occurred during registration", error },
      { status: 500 }
    );
  }
}
