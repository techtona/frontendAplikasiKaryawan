import React, {createContext} from "react";

const {Provider, Consumer} = createContext('en');
export default function Body() {
    return(
        <Consumer>
            {
                props => (
                    <p>Language : {props}</p>
                )
            }
        </Consumer>
    )
}
