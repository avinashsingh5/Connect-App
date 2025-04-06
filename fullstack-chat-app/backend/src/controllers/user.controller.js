import User from "../models/user.model.js";

// ✅ Update Profile Controller
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Make sure `authMiddleware` attaches `req.user`
    const { fullName, email, profilePic } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName, email, profilePic },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
