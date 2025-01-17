"use-client";
import React from "react";
import GoogleSignin from "./img/btn_google_signin_dark_pressed_web.png";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ChatBox from "./ChatBox";

const TeamChats = () => {
  return (
    <div className="mt-4">
      <ChatBox />
    </div>
  );
};

export default TeamChats;
