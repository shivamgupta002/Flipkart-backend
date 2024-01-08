import User from "../model/user-schema.js";

export const userSignUp = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.userName });
    if (exist) {
      return res.status(401).json({ message: "Username already exist" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message: user });
  } catch (e) {
    console.log("Error find in userSignUp controller due to ", e.message);
    return res.status(500).json({ message: e.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;
    let user = await User.findOne({ userName: userName, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (error) {
    console.log("Error find in userLogin controller due to ", error.message);
    return res.status(500).json(error.message);
  }
};
