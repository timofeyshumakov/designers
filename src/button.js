export default function Button(props) {
    let button;
        if (props.href !== undefined){
            button = <form action = {props.href}><button className = {`${props.bemBlock}${props.cn}`}>{props.txt}</button></form>;
        }else{
            button = <button>{props.txt}</button>;
        }
    return (
        <>{button}</>
    )
}