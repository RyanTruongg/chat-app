import ChatboxCard from './ChatboxCard';

const ChatboxList = ({ listData, setOpen }) => {
  return (
    <div className="chatbox-list">
      {listData?.map(({ uid, ...rest }) => /* uid, displayName, msg */
        <ChatboxCard
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
