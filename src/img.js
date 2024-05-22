import React from 'react';

export default function Img(props) {
    let img = <img className = {`${props.bemBlock}${props.cn}`} src = {`img/${props.src}.${props.format}`} alt = {props.alt} title = {props.alt} loading= {props.loading} tabindex= {props.tabindex}/>;

	if (props.format === "svg") {
        return (
            <>{img}</>
        )
    }else{
        return(
            <picture>
                {img}
            </picture>
        )
    }
    return (1);
}
