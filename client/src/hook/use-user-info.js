import { usersSelector, fetchUserById } from "../app/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function useUserInfo() {
  const dispatch = useDispatch({});
  const state = useSelector((state) => state);

  const getUserById = (id) => {
    const user = usersSelector.selectById(state, id);
    if (user) return user;
    else {
      if (state.users.requests[id] !== "pending") {
        dispatch(fetchUserById(id));
      }
    }
  };

  return {
    getUserById,
  };
}
