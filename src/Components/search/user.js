import React from "react";

const Search = (props) => {
    return(
        <>
            <input type='search' name='name'
            className={`mb-5 ${props.className}`}
            onChange={props.handleSearch} />
        </>
    )
}
export {Search}
