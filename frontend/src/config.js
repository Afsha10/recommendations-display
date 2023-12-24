export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://recommendations-tracker-backend.onrender.com"
    : "http://localhost:5000";
