import React from "react";
import firebase from "firebase";

function LogoutButton() {

    function handleClick(e: React.MouseEvent) {
        console.log("click");
        firebase.auth().signOut().then(() => {
            console.log("ログアウトしました");
        }).catch((error) => {
            console.log(`えらー ${error}`);
        });
    }

    return (
        <div>
            <button onClick={(e) => handleClick(e)}>Logout</button>
        </div>
    );
}

export default LogoutButton;