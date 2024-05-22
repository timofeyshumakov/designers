import Img from './img';

export default function Promo() {
    let sectionName = "promo";
    let bemBlock = `${sectionName}__`;
    const arr = ['is a WordPress-based portfolio tool and community of the world’s leading designers.', 'Design a custom site that meets your level of taste and standards – no templates, no coding needed.', <button className = {`${bemBlock}action-button action-button`}><Img bemBlock = 'action-button__' cn = 'img' src = {`${sectionName}/watch`} format = "svg"/><span className='action-button__txt'>Watch the trailer</span></button>];
	const res = arr.map(function(item) {
        if (typeof item ==='string') {
            return <div className = {`${bemBlock}info-row`}>{item}</div>;
        } else if (typeof item === 'object') {
            return <>{item}</>;
        }
	});
	const titleParts = ['Think', 'outside the', 'square space.']
    const titleText = titleParts.map(function(item) {
            return <p>{item}</p>;

	});

    return (
        <>
            <h1 className = {`${bemBlock}title`}>{titleText}</h1>
            <button className = {`${bemBlock}details`}>
                <Img bemBlock = {bemBlock} cn = 'details-img' src = {`${sectionName}/details`} format = "svg"/>
            </button>
            <div className = {`${bemBlock}info`}>
              {res}
            </div>
        </>
    );
}