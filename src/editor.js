import SectionTitle from './SectionTitle/SectionTitle.js';
import Img from './img';

let sectionName = "editor";
let bemBlock = `${sectionName}__`;

export default function Editor() {
    return (
        <>
        <SectionTitle bemBlock = {bemBlock} topTitle="BY DESIGNERS, FOR DESIGNERS" title="The Editor" txt="The only building experience made for a designer’s mind. Build on a grid with visual drag & drop – no templates. Clean and intuitive with dead-simple features, it enables evolution. Take your site live one day, change it up the next."/>
        <Img bemBlock = {bemBlock} cn = 'img' src = {`${sectionName}/img`} format = "jpg"/>
        </>
        );
}