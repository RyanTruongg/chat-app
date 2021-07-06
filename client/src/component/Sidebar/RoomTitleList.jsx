import RoomTitleCard from './RoomTitleCard';

const ChatboxList = ({ listData, setOpen }) => {
  return (
    <div className="room-title__list">
      {listData?.map(({ uid, ...rest }) => /* uid, displayName, msg */
        <RoomTitleCard
          key={uid}
          {...rest}
          setOpen={setOpen}
          to={"/home/t/" + uid}
          uid={uid}
        />
      )}
    </div>
  );
}

export default ChatboxList;
