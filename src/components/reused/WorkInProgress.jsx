import { ICON_WORK_IN_PROGRESS } from '../../services/globals/icons';
import { useTranslation } from 'react-i18next';

WorkInProgress.propTypes = {};

function WorkInProgress() {
    const { t } = useTranslation('work-in-progress');
    return (
        <div className="flex grow flex-col justify-center items-center gap-4 text-secondaryDark p-8">
            {ICON_WORK_IN_PROGRESS}
            <p className="font-heading text-base sm:text-xl text-primaryDark text-center">
                {t('text')}
            </p>
        </div>
    );
}

export default WorkInProgress;
