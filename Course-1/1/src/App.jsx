import React from "react";
import './index.css'

const USERS = [
    {name: 'Alex', surname:'Ivanov', age: 21, passportId: 123},
    {name: 'John', surname:'Petrov', age: 19, passportId: 234},
    {name: 'Bob', surname:'Kiselev', age: 25, passportId: 536}
];

function generateKey(user) {
    return `${user.name}_${user.surname}_${age}_${passportId}`;
};

const App = () => {
    return (
        <div>
            {USERS.map((user) => {
                const keyId = generateKey(user);
                return (
                    <div key={keyId}>
                        <p>{user.name}</p>
                    </div>
                );
            })}
        </div>
    );
};


export default App;