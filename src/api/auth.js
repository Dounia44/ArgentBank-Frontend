import { BASE_URL } from "./config";

export async function loginApi({ email, password }) {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Erreur lors de la connexion");
  }

  return data.body.token;
}

export async function signupApi({
  email,
  password,
  firstName,
  lastName,
  userName,
}) {
  const response = await fetch(`${BASE_URL}/user/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, firstName, lastName, userName }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Erreur lors de l'inscription");
  }

  return data.body;
}
