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
        headerTitle="Booksðð§âð"
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
            message: "Great!ð¤ Chose Your Problem ð¥²",
            trigger: "after-yes",
          },
          {
            id: "no-response",
            message: "Sorry to hear that. ð²",
            end: true,
          },
          {
            id: "after-yes",
            options: [
              {
                value: "1",
                label: "Where i find all books ? ð",
                trigger: "bookfind-response",
              },
              {
                value: "2",
                label: "Book is Not Available ð",
                trigger: "notavailable-response",
              },
              {
                value: "3",
                label: "Error in PDF Loading ð",
                trigger: "error-response",
              },
            ],
          },
          {
            id: "more-issue-exit",
            options: [
              {
                value: "1",
                label: "More Issue ð¥²",
                trigger: "after-yes",
              },
              {
                value: "2",
                label: "Exit â",
                trigger: "intro",
              },
            ],
          },
          //   ..................................................................>
          {
            id: "bookfind-response",
            message: "GO to Library Page ð ",
            trigger: "more-issue-exit",
          },
          {
            id: "notavailable-response",
            message:
              "Go to contact page ð¨ and fill the form under 24hr book is added ð",
            trigger: "more-issue-exit",
          },
          {
            id: "error-response",
            message: "Sorry for It plz send a mail to sambitn20@gmail.com ð",
            trigger: "more-issue-exit",
          },
        ]}
        {...config}
      />
    </div>
  );
};

export default ChatBoat;
