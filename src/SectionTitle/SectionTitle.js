import SectionTitleStyle from './SectionTitle.sass';

let topTitle;
let title;
let txt;
let link;
let block = 'section-title';

export default function SectionTitle(props) {

    if (props.topTitle !== undefined) {
        topTitle = <div className = {`${block}__top-title`}><h2 className = {`${block}__top-title-txt`}>{props.topTitle}</h2><div className = {`${block}__top-title-line`}></div></div>;
    }
	else{
        topTitle = null;
    }

	if (props.title !== undefined) {
		title = <h3 className = {`${block}__title`}>{props.title}</h3>;
	}else{
        title = null;
    }

    if (props.txt !== undefined) {
		txt = <div className = {`${block}__txt`}>{props.txt}</div>;
	}else{
        txt = null;
    }

    if (props.link !== undefined) {
		link = <div className = {`${block}__top-title-link`}>{props.link}</div>;
	}else{
        link = null;
    }

  return (
    <div className = {`${props.bemBlock}${block} ${block}`}>
        {topTitle}
        {title}
        {txt}
        {link}
    </div>
  );
}
