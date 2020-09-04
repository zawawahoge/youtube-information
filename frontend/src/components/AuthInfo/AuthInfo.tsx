import React from "react";
import firebase from "firebase";


type Props = {
  user: firebase.User,
}

export default function AuthInfo(props: Props) {
  const user = props.user;

  return (
    <div>
      {user.toJSON()}
    </div>
  );
}
