import ChatboxCard from './ChatboxCard';

const ChatboxList = ({ listData }) => {
  return (
    <div className="chatbox-list">
      {listData?.map(({ uid, ...rest }) => /* uid, displayName, msg */
        <ChatboxCard
          key={uid}
          {...rest}
          to={"/home/t/" + uid}
          uid={uid}
        />
      )}
    </div>
  );
}

export default ChatboxList;
