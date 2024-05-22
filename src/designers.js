import SectionTitle from './SectionTitle/SectionTitle.js';
import DesignersCard from './designersCard';
import Img from './img';

let sectionName = "designers";
let bemBlock = `${sectionName}__`;

let cards = [['Erik Jonsson', 'Erik Jonsson', 'Design & Art Direction'], ['Erik Jonsson', 'Erik Jonsson', 'Design & Art Direction']];
let card = cards.map(function(card) {
    return <DesignersCard sectionName = {sectionName} src = {card[0]} title = {card[1]} subtitle = {card[2]} />;
});

export default function Designers() {
    return (
        <>
        <SectionTitle bemBlock = {bemBlock} topTitle="TRUSTED BY THE BEST" title="The world's leading designers use and love Semplice." link = "→ See their portfolios"/>
        <Img bemBlock = {bemBlock} cn = 'img' src = {`${sectionName}/img`} format = "jpg"/>
        {card}
        </>
    );
}