import Button from './button';
export default function Header() {
    const arr = ['Semplice v6', 'Showcase', 'Features', 'Resources'];
    let newBlock;
    let bemBlock = `header__`;
	const res = arr.map(function(item, i) {
        newBlock = `menu__`
        if (i === 0){
            return <li className = {`${newBlock}item`}><a className = {`${newBlock}link`}>{item}<span className="top">new</span></a></li>;
        }else{
		    return <li className = {`${newBlock}item`}><a className = {`${newBlock}link`}>{item}</a></li>;
        }
	});

    return (
        <header className = "header">
            <div className = {`${bemBlock}container container`}>
                <nav className = {`${bemBlock}nav`}>
                    <ul className = {`${bemBlock}menu menu`}>{res}</ul>
                </nav>
                <Button bemBlock = {bemBlock} cn = "button login" txt = "Get Semplice" href = "#"/>
            </div>
        </header>
    );
}
