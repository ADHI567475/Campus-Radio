// College Email Validation
export function isCollegeEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@rguktn\.ac\.in$/;
  return regex.test(email);
}

// Nickname Validation
export function validateNickname(nickname) {
  if (nickname.length < 3)
    return "Nickname must be at least 3 characters.";

  if (nickname.length > 20)
    return "Nickname cannot exceed 20 characters.";

  if (!/^[A-Za-z0-9_]+$/.test(nickname))
    return "Only letters, numbers and underscores are allowed.";

  return "";
}

// Password Strength
export function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score += 20;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[a-z]/.test(password)) score += 20;
  if (/[0-9]/.test(password)) score += 20;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;

  if (score <= 20) {
    return {
      score,
      label: "Weak",
      color: "bg-red-500",
    };
  }

  if (score <= 40) {
    return {
      score,
      label: "Medium",
      color: "bg-yellow-500",
    };
  }

  if (score <= 80) {
    return {
      score,
      label: "Strong",
      color: "bg-cyan-500",
    };
  }

  return {
    score,
    label: "Very Strong",
    color: "bg-green-500",
  };
}