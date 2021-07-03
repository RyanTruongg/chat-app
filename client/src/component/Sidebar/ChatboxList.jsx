import ChatboxCard from './ChatboxCard';

const ChatboxList = ({ listData }) => {
  return (
    <div className="chatbox-list">
      {listData?.map(({ uid, ...rest }) =>
        <ChatboxCard
          key={uid}
          {...rest}
          to={"/home/t/" + uid}
        />
      )}
    </div>
  );
}

export default ChatboxList;
