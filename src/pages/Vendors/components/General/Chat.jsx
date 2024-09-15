import React, { useState } from "react";
import moment from "moment";
import { Input } from "antd";
import UuerOutlined from "../../assets/check_balance.jpeg";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage = {
      text: inputText,
      timestamp: Date.now(),
    };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="h-[300px] relative overflow-auto p-[20px]">
      {messages.map((message, index) => {
        const messageDate = moment(message.timestamp).format("MMMM Do YYYY");
        const currentTime = moment().format("MMMM Do YYYY");
        const isNewDate = messageDate !== currentTime;

        return (
          <div key={index} className="flex  flex-col px-[20px]">
            {isNewDate && <div className="">Date: {messageDate}</div>}
            <div className="flex gap-[10px] my-[10px] justify-end">
            <div className="h-max bg-[#f2f7ff] whitespace-normal overflow-wrap-break-word rounded-l-[20px] rounded-tr-[30px] px-[10px] py-[5px]">
              {message.text}
            </div>
            <img
              className="h-[30px] w-[30px] rounded-[4px] cursor-pointer"
              src={UuerOutlined}
              alt=""
            />
            </div>
            
          </div>
        );
      })}
      <div className="absolute bottom-[10px] flex h-max gap-[10px]">
        <Input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="shadow-btn text-white bg-[#015FF1] rounded px-[20px] py-[5px]"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
