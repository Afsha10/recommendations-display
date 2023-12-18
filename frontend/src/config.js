export const baseUrl =
  process.env.REACT_APP_IS_PRODUCTION === "true"
    ? "https://recommendations-tracker-backend.onrender.com"
    : "http://localhost:5000";
