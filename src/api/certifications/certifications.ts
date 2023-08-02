import { fetch } from "cross-fetch";

const API_URL = "https://baptiste-marcon-api.adaptable.app/";

export async function getCertifications() {
  const response = await fetch(`${API_URL}/certifications`, {
    mode: "cors",
    method: "GET",
  });
  return await response.json();
}
