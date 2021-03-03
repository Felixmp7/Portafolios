import TitleWithLine from './utils/TitleWithLine';
import TrainingItem from './TrainingItem';
import trainingList from '../utils/static-data/knowledge.json';

const theme = {
    textColor: 'text-react',
    borderColor: 'border-react',
};

const Knowledge = () => (
    <section id="knowledge" className="p-4 mx-auto mt-10 tablet:mt-32 tablet:p-0 containerXl">
        <TitleWithLine text="Mi" colorText="formación" theme={theme} />
        <div className="w-full my-10 tablet:grid tablet:grid-cols-3 tablet:gap-10">
            {trainingList.map((item) => (
                <TrainingItem key={item.id} {...item} />
            ))}
        </div>
    </section>
);

export default Knowledge;
