import React from "react";

import { ChatEngine } from "react-chat-engine";
import "../SupportEngine/index.scss";

const SupportAdmin = () => {
  return (
    <div style={{ width: "100vw", padding: "5rem" }}>
      <ChatEngine
        projectID={`
          bf4316d6-924d-4a0c-80d8-f394e5f86ae7`}
        userName="StockOverWatch"
        userSecret="123"
        // height="calc(100vh - 12px)"
      />
    </div>
  );
};

export default SupportAdmin;
