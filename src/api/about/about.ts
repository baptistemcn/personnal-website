import { fetch } from "cross-fetch";

const API_URL = "https://baptiste-marcon-api.adaptable.app/";

export async function getAbout(lang: string) {
  const response = await fetch(`${API_URL}/about?language=${lang}`, {
    method: "GET",
  });
  return await response.json();
}
