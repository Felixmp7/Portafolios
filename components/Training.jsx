import { useState } from 'react';
import useIsInView from '../hooks/useIsInView';
import TitleWithLine from './utils/TitleWithLine';
import TrainingItem from './TrainingItem';
import trainingList from './static-data/knowledge.json';

const theme = {
    textColor: 'text-react',
    borderColor: 'border-react',
};

const Training = () => {
    const [isShowFirstData, setIsShowFirstData] = useState(true);
    const { ref, opacityEffect } = useIsInView();
    const firstData = trainingList.slice(0, 6);
    const data = isShowFirstData ? firstData : trainingList;

    return (
        <section
            ref={ref}
            data-cy="training"
            id="training"
            className={`mx-auto mt-10 mobileContainer tablet:mt-32 containerXl ${opacityEffect}`}
        >
            <TitleWithLine text="Mi" colorText="formación" theme={theme} />
            <div className="w-full my-10 mobileLg:grid mobileLg:grid-cols-2 mobileLg:gap-5 laptopLg:grid-cols-3 laptopLg:gap-10">
                {data.map((item) => (
                    <TrainingItem key={item.id} {...item} />
                ))}
            </div>
            {(!!isShowFirstData) && (
                <div className="w-32 mx-auto">
                    <button
                        type="button"
                        className="button pink"
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
