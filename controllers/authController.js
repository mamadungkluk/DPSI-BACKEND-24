const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;  // Mengambil username, password, dan role dari body request
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password sebelum disimpan ke database untuk keamanan
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login a user
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;   // Mengambil username dan password dari body request
    const user = await User.findOne({ username });   // Mencari pengguna di database berdasarkan username
    if (!user) {                                      // Jika pengguna tidak ditemukan, berikan pesan error
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);   // Membandingkan password yang diberikan dengan password yang di-hash yang disimpan
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });   // Mengenerate token
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: error.message });  // Menangani setiap kesalahan yang terjadi selama proses login
  }
};
