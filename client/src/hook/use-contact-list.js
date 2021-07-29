import React, { useState, useContext, useEffect } from 'react';
import { useAuth } from './use-auth';

const contactListContext = React.createContext();

export const ProvideContactList = ({ children }) => {
  const contactList = useProvideContactList();
  return (
    <contactListContext.Provider value={contactList}>{children}</contactListContext.Provider>
  )
}
export const useContactList = () => {
  return useContext(contactListContext);
}

const useProvideContactList = () => {
  const [data, setContactList] = useState([]);

  const auth = useAuth();

  const updateContact = (contact) => {
    let updated = [];
    if (data.some(e => e.contactID = contact.contactID)) {
      updated = [...data].map(currContact => {
        if (currContact.contactID === contact.contactID) return contact;
        return currContact
      })
    } else {
      updated = [...data, contact]
    }
    setContactList(sortByTimestamp(updated));
  }

  function sortByTimestamp(data) {
    let tmp = [...data].sort((a, b) => b.lastMsg.timestamp - a.lastMsg.timestamp);
    return tmp;
  }

  useEffect(() => {
    if (auth.user) {
      import('../service/firebase')
        .then(({ default: firebase }) => {
          firebase.auth().currentUser.getIdToken(true)
            .then((idToken) => {
              const headers = { 'Authorization': 'Bearer ' + idToken }
              const url = "/api/contacts/" + auth.user?.uid;
              fetch(url, { headers })
                .then(res => res.json())
                .then(json => setContactList(sortByTimestamp(json)))
                .catch(e => console.log(e));
            });
        })
    }
  }, [auth.user, auth.user?.uid]);

  return {
    data,
    setContactList,
    updateContact
  }
}

