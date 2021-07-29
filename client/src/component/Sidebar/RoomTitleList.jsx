import RoomTitleCard from './RoomTitleCard';

const ChatboxList = ({ listData, setOpen }) => {
  return (
    <div className="room-title__list">
      {listData?.map(({ contactID, ...rest }) => /* contactID, displayName, msg */
        <RoomTitleCard
          key={contactID}
          {...rest}
          to={"/home/t/" + contactID}
          contactID={contactID}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}

export default ChatboxList;
