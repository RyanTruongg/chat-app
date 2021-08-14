import fetchWithToken from "./fetchWithToken";

export const fetchMessages = (uid, conversationID) => {
  return fetchWithToken(
    `/api/message?uid=${uid}&conversationID=${conversationID}`
  );
};

const messagesAPI = {
  fetchMessages,
};

export default messagesAPI;
