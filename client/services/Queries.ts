import axios from "axios";

export async function getAllTrips() {
  const response = await axios.get("/api/trips");
  return response;
}

export async function checkLoginStatus() {
  try {
    await axios.get("/api/user");
  } catch (error) {
    console.error(error);
  }
}
