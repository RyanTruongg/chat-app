import fetchWithToken from "./fetchWithToken";

export const createNewUser = (uid) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ uid: uid }),
  };
  return fetchWithToken("/api/user/", options);
};

export const fetchUserById = (uid) => {
  return fetchWithToken("/api/user/" + uid);
};

const userAPI = {
  createNewUser,
  fetchUserById,
};

export default userAPI;
