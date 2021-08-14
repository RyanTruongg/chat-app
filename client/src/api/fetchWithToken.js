import importFirebase from "../service/importFirebase";

export default async function fetchWithToken(url, options = {}) {
  const firebase = await importFirebase;
  return firebase
    .auth()
    .currentUser?.getIdToken(false)
    .then(async (idToken) => {
      const headers = {
        Authorization: "Bearer " + idToken,
        "Content-Type": "application/json",
      };
      const res = await fetch(url, { ...options, headers });
      return await res.json();
    });
}
