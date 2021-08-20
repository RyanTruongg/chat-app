import { useEffect, useState } from "react";
import SearchIcon from "../../assets/icon/search.svg";
import socket from "../../service/websocket";

import { Link } from "react-router-dom";
import Avatar from "../common/Avatar";

export default function SearchInput() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    socket.on("search:user", (payload) => {
      setResult(payload);
    });
    return () => {
      socket.off("search:user");
    };
  }, []);

  const emitSearch = (e) => {
    setInput(e.target.value);
    socket.emit("search:user", e.target.value, (res) => {
      setResult(res);
    });
  };

  const handleBlur = () => {
    setTimeout(() => setResult([]), 100);
  };

  return (
    <div onBlur={handleBlur}>
      <input
        type="text"
        placeholder="Find"
        value={input}
        onFocus={emitSearch}
        onChange={emitSearch}
        style={{
          borderRadius: result.length !== 0 ? "16px 16px 0 0" : "16px",
          transition: "0.25s",
        }}
      />
      {!input && <img className="search-icon" src={SearchIcon} alt="" />}
      <div
        style={{
          position: "absolute",
          marginTop: "4px",
          backgroundColor: "white",
          width: "100%",
          boxShadow: "0 0 5px 0px #aaa",
        }}>
        {result.map(({ _id, displayName, photoURL }) => {
          return (
            <Link
              key={_id}
              to={`/home/t/${_id}`}
              style={{ display: "flex", alignItems: "center", padding: "8px" }}>
              <Avatar imgSrc={photoURL} size="medium" />
              <span style={{ marginLeft: "16px" }}>{displayName}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
