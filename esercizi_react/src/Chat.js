import { useState, useEffect } from "react";

//Creo i componenti e li collego fra di loro

export function Chat() {
    function MessageBar() {
        let [msg, setMsg] = useState('')
        let [user, setUser] = useState('')
    }

    
    function MainChat() {

    }

    return (
        <>
            <input>Username</input>
            <input>Message</input>
            <button>Ciao</button>
        </>

    )

}

