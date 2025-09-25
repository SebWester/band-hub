const URL = "http://localhost:3000/api/signup";

export async function signUp(user: object) {
  console.log(user);
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data;
}
