export default function List() {
    if (props.href.length > 0){
        item = <a href = {props.href}>{props.item}</a>;
    }else{
        item = props.item;
    }
    
    return (
        <ul>
            <li>{item}</li>
        </ul>
    )
}