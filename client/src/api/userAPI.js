import fetchWithToken from "./fetchWithToken";

export const createNewUser = (uid) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ uid: uid }),
  };
  return fetchWithToken("/api/user/", options);
};

const userAPI = {
  createNewUser,
};

export default userAPI;
