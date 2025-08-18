import GoogleUser from "../models/GoogleUser.js";

const createOrUpdateUser = async (req, res) => {
  try {
    const { name, email, image } = req.body;

    // check existing user by email
    let user = await GoogleUser.findOne({ email });

    if (!user) {
      // create new user
      user = await GoogleUser.create({ name, email, image });
      console.log("🆕 New Google User saved");
      return res.status(201).json({
        message: "New user created",
        user,
      });
    } else {
      // user already exists → just login success
      console.log("User login success");
      return res.status(200).json({
        message: "Login success",
        user,
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export default createOrUpdateUser;
