import React from "react";

export default function DetailsList({data}){

    return(
        <div>
            <div >

                <h2 className="profession">{data.profession}</h2>
                <h3 className="location">📍{data.city}</h3>

            </div>
            <div className="facts">
                <h2 className="fact">{data.hobbies}</h2>
                {/*<ul>*/}
                {/*    <li className="fact">{data.hobbies}</li>*/}
                {/*    /!*<li className="fact">hobby 2</li>*!/*/}
                {/*    /!*<li className="fact">hobby 3</li>*!/*/}
                {/*</ul>*/}
            </div>
        </div>


    )
}