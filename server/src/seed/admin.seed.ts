import User from "../models/user";

const seed = async () => {
  try {
    const user = await User.findOne({ email: "admin" });
    if (!user) {
      await User.create({ email: "admin", password: "1234", role: "admin" });
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Admin user creation error:", error);
  }
};

export default seed;
