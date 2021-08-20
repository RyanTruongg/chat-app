import fetchWithToken from "./fetchWithToken";

export const fetchAllConversationsOfUser = (uid) => {
  return fetchWithToken("/api/conversations/" + uid);
};

export const markAsRead = (uid, conversationID) => {
  const body = {
    uid,
    conversationID,
  };
  return fetchWithToken("/api/conversations/update-seen", {
    method: "PUT",
    body: JSON.stringify(body),
  });
};

const conversationsAPI = {
  fetchAllConversationsOfUser,
  markAsRead,
};

export default conversationsAPI;
