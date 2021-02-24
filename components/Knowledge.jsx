import TitleWithLine from './utils/TitleWithLine';
import KnowledgeItem from './KnowledgeItem';
import knowLedgeList from '../utils/static-data/knowledge.json';

const theme = {
    textColor: 'text-react',
    borderColor: 'border-react',
};

const Knowledge = () => (
    <section id="knowledge" className="p-4 mx-auto mt-10 tablet:mt-32 tablet:p-0 containerXl">
        <TitleWithLine text="formación" theme={theme} />
        <div className="w-full my-10 tablet:grid tablet:grid-cols-3 tablet:gap-10">
            {knowLedgeList.map((item) => (
                <KnowledgeItem {...item} />
            ))}
        </div>
    </section>
);

export default Knowledge;
