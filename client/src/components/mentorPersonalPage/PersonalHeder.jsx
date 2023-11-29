import React from "react";

export default function PersonalHeader() {
    const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
    //const style = {};
    // var hour = new Date().getHours();
    // var massage = "";
    // // var name = "Esti Bricker";
    //
    // //add name later by log in
    // if (hour < 12 && hour > 4) {
    //     massage = "Good Morning Dear";
    // } else if (hour < 17) {
    //     massage = "Good Afternoon Dear";
    // } else {
    //     massage = "Good Evening Dear";
    // }
    // massage = massage + " " + 'Queen';

    return (
        <header className="header">
            <img
                src="../public/logo.png" // Assuming your logo is in the public directory
                alt="Teacher Pic"
                className="profile-img"
            />
            <h1 style={style}>Teacher Name</h1>

            {/*<h2>{massage}</h2>*/}
        </header>
    );
}
