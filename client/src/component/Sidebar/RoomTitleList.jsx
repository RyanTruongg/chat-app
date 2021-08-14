import RoomTitleCard from "./RoomTitleCard";

const ChatboxList = ({ data, setOpen }) => {
  return (
    <div className="room-title__list">
      {data?.map(({ info, lastMsg, seen, ...rest }) => (
        <RoomTitleCard
          key={info._id}
          seen={seen}
          info={info}
          lastMsg={lastMsg}
          to={"/home/t/" + info._id}
          setOpen={setOpen}
          {...rest}
        />
      ))}
    </div>
  );
};

export default ChatboxList;
