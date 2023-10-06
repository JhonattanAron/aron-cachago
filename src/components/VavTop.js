import React from "react";

export default function NavTop(props) {
    let links = props.links
    const linksMap = links.map((data, index) => {
        return(
            <li key={index}>
                <a key={index} href={data}>{data}</a>
            </li>
            )       
    })
    return (
        <div className="navTop">
            <div>
                <h3>lOGO</h3>
            </div>
            <div className="navTopLinks">
                {linksMap}
            </div>
        </div>
    )
}