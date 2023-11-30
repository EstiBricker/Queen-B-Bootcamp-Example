import React from "react";
// import person1 from "../../images/person1.svg";
// // import person2 from "../images/person2.svg";
// // import person3 from "../images/person3.svg";
// // import person4 from "../images/person4.svg";
// // import person5 from "../images/person5.svg";
// // import person6 from "../images/person6.svg";
// import person7 from "../../images/person7.svg";

export default function PersonalHeader({name, img}) {

    // const avatars = [person1, person7];
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
                src={img} // Assuming your logo is in the public directory
                alt="Teacher Pic"
                className="profile-img"
            />
            <h1 style={style}>{name}</h1>

            {/*<h2>{massage}</h2>*/}
        </header>
    );
}
