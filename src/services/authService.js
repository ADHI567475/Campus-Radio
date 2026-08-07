const STORAGE_KEY = "campus-radio-user";
const USERS_KEY = "campus-radio-users";

// ----------------------------
// Get Current Logged User
// ----------------------------
export async function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_KEY);

  return user ? JSON.parse(user) : null;
}

// ----------------------------
// Register
// ----------------------------
export async function register(formData) {
  const users = JSON.parse(
    localStorage.getItem(USERS_KEY) || "[]"
  );

  const exists = users.find(
    (u) =>
      u.email.toLowerCase() ===
      formData.email.toLowerCase()
  );

  if (exists) {
    throw new Error("Email already registered.");
  }

  const nicknameExists = users.find(
    (u) =>
      u.nickname.toLowerCase() ===
      formData.nickname.toLowerCase()
  );

  if (nicknameExists) {
    throw new Error("Nickname already exists.");
  }

  const newUser = {
    id: Date.now(),
    nickname: formData.nickname,
    email: formData.email,
    password: formData.password, // Backend will hash later
    gender: formData.gender,
    interests: formData.interests,
    role: "student",
    verified: true,
    joinedAt: new Date().toISOString(),
  };

  users.push(newUser);

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(newUser)
  );

  return newUser;
}

// ----------------------------
// Login
// ----------------------------
export async function login(email, password) {
  const users = JSON.parse(
    localStorage.getItem(USERS_KEY) || "[]"
  );

  const user = users.find(
    (u) =>
      u.email.toLowerCase() ===
        email.toLowerCase() &&
      u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(user)
  );

  return user;
}

// ----------------------------
// Logout
// ----------------------------
export async function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

// ----------------------------
// Forgot Password
// ----------------------------
export async function forgotPassword(email) {
  console.log("Forgot Password:", email);

  return true;
}

// ----------------------------
// Verify OTP
// ----------------------------
export async function verifyOTP(code) {
  console.log("OTP:", code);

  return true;
}

// ----------------------------
// Resend OTP
// ----------------------------
export async function resendOTP(email) {
  console.log("Resend OTP:", email);

  return true;
}