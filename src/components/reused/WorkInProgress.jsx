import { ICON_WORK_IN_PROGRESS } from '../../services/globals/icons';

WorkInProgress.propTypes = {};

function WorkInProgress() {
    return (
        <div className="flex grow flex-col justify-center items-center gap-4 text-secondaryDark">
            {ICON_WORK_IN_PROGRESS}
            <p className="font-heading text-base sm:text-xl text-primaryDark text-center">
                This page is not ready yet. Code in progress...
            </p>
        </div>
    );
}

export default WorkInProgress;
