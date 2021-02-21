import knowLedgeList from '../utils/static-data/knowledge.json';
import KnowledgeItem from './KnowledgeItem';

const Knowledge = () => (
    <section className="p-4 mx-auto mt-10 tablet:mt-20 tablet:p-0 containerXl">
        <h2 className="text-5xl font-semibold tablet:text-8xl">
            Mi
            <span className="text-react"> formación</span>
        </h2>
        <div className="w-5/6 mb-5 border-4 tablet:mb-0 tablet:w-1/3 border-react" />
        <siv className="w-full my-10 tablet:grid tablet:grid-cols-3 tablet:gap-10">
            {knowLedgeList.map((item) => (
                <KnowledgeItem {...item} />
            ))}
        </siv>
    </section>
);

export default Knowledge;
