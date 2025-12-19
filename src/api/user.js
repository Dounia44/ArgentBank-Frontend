import { BASE_URL } from "./config";

export async function getUserProfileApi(token) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data.body;
}

export async function updateUserProfileApi(token, { userName }) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data.body;
}
