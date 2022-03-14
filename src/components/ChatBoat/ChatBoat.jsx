import React from "react";
import ChatBot from "react-simple-chatbot";

const config = {
  width: "350px",
  height: "500px",
  floating: true,
};
const ChatBoat = () => {
  return (
    <div>
      <ChatBot
        headerTitle="Books📗🧑‍🚀"
        steps={[
          {
            id: "intro",
            message: "Hi! Do you need some help?",
            trigger: "intro-user",
          },
          {
            id: "intro-user",
            options: [
              { value: "y", label: "Yes", trigger: "yes-response" },
              { value: "n", label: "No", trigger: "no-response" },
            ],
          },
          {
            id: "yes-response",
            message: "Great!🤝 Chose Your Problem 🥲",
            trigger: "after-yes",
          },
          {
            id: "no-response",
            message: "Sorry to hear that. 😲",
            end: true,
          },
          {
            id: "after-yes",
            options: [
              {
                value: "1",
                label: "Where i find all books ? 📖",
                trigger: "bookfind-response",
              },
              {
                value: "2",
                label: "Book is Not Available 📚",
                trigger: "notavailable-response",
              },
              {
                value: "3",
                label: "Error in PDF Loading 😔",
                trigger: "error-response",
              },
            ],
          },
          {
            id: "more-issue-exit",
            options: [
              {
                value: "1",
                label: "More Issue 🥲",
                trigger: "after-yes",
              },
              {
                value: "2",
                label: "Exit ❌",
                trigger: "intro",
              },
            ],
          },
          //   ..................................................................>
          {
            id: "bookfind-response",
            message: "GO to Library Page 📗 ",
            trigger: "more-issue-exit",
          },
          {
            id: "notavailable-response",
            message:
              "Go to contact page 📨 and fill the form under 24hr book is added 👍",
            trigger: "more-issue-exit",
          },
          {
            id: "error-response",
            message: "Sorry for It plz send a mail to sambitn20@gmail.com 👍",
            trigger: "more-issue-exit",
          },
        ]}
        {...config}
      />
    </div>
  );
};

export default ChatBoat;
