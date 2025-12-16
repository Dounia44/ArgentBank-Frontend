import { BASE_URL } from "./config";

export async function getUserProfile(token) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || "Erreur lors de la récupération du profil"
    );
  }

  return data.body;
}

export async function updateUserProfile(token, { userName }) {
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
    throw new Error(data?.message || "Erreur lors de la mise à jour du profil");
  }

  return data.body;
}
