import { useState } from 'react';
import TitleWithLine from './utils/TitleWithLine';
import TrainingItem from './TrainingItem';
import trainingList from '../utils/static-data/knowledge.json';

const theme = {
    textColor: 'text-react',
    borderColor: 'border-react',
};

const Training = () => {
    const [isShowFirstData, setIsShowFirstData] = useState(true);
    const firstData = trainingList.slice(0, 6);
    const data = isShowFirstData ? firstData : trainingList;

    return (
        <section id="training" className="p-4 mx-auto mt-10 tablet:mt-32 tablet:p-0 containerXl">
            <TitleWithLine text="Mi" colorText="formación" theme={theme} />
            <div className="w-full my-10 tablet:grid tablet:grid-cols-3 tablet:gap-10">
                {data.map((item) => (
                    <TrainingItem key={item.id} {...item} />
                ))}
            </div>
            {(!!isShowFirstData) && (
                <div className="w-32 mx-auto">
                    <button
                        type="button"
                        className="button primary"
                        onClick={() => setIsShowFirstData(false)}
                    >
                        Ver más
                    </button>
                </div>
            )}
        </section>
    );
};

export default Training;
