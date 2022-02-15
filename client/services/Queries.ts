import axios from "axios";

export async function getAllTrips() {
  const response = await axios.get("/api/trips");
  return response;
}
