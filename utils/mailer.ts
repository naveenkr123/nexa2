import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    console.log("sendEmail parameters:", { email, emailType, userId });

    const hashedToken = await bcryptjs.hash(userId, 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, { verifyToken: hashedToken });
      console.log("Verification token saved.");
    }

    console.log(`Email sent to ${email} with token: ${hashedToken}`);
  } catch (error) {
    console.error("Error in sendEmail:", error);
    throw new Error("Failed to send email");
  }
};
