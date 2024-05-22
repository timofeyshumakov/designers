import Promo from './promo';
import Editor from './editor';
import Designers from './designers';
import Cases from './cases';
import Features from './features';
import Customize from './customize';
import Gallery from './gallery';
import Booking from './booking';
import Catalog from './catalog';

const sectionNames = ['promo', 'editor', 'designers', 'cases', 'features', 'customize', 'gallery', 'booking', 'catalog']
const arr = [<Promo />, <Editor />, <Designers />, <Cases />, <Features />, <Customize />, <Gallery />, <Booking />, <Catalog />]

const sectionWrapper = arr.map(function(item, i) {
    let bemBlock = `${sectionNames[i]}__`;
    return <section className = {`main__${sectionNames[i]} ${sectionNames[i]}`}><div className = {`${sectionNames[i]}__container container`}>{item}</div></section>;
});

export default function Main() {
    return (
        <main>
            {sectionWrapper}
        </main>
    );
}