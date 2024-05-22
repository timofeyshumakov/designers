import Img from './img';

export default function DesignersCard(props) {
    let bemBlock = `${props.sectionName}__`;
    return(
        <div>
            <Img bemBlock = {bemBlock} cn = 'img' src = {`${props.sectionName}/${props.src}`} format = "jpg"/>
            <div>{props.title}</div>
            <div>{props.subtitle}</div>
        </div>
    )
}
