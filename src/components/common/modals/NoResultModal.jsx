//libraries
import PropTypes from 'prop-types';

//components
import BaseModal from './BaseModal';
import ActionButton from '../../reused/ActionButton';
import { ICON_RETRY } from '../../../services/globals/icons';
import { CLASSLIST_H3 } from '../../../services/globals/classlists';

function NoResultModal({ text, callback }) {
    return (
        <BaseModal>
            <div className="bg-alertLight w-full h-max p-8 sm:p-16 rounded-xl shadow-xl flex flex-col justify-between items-center gap-4 xl:gap-8">
                <h3 className={CLASSLIST_H3}>Sorry...</h3>
                <div className="w-20 sm:w-28 text-secondaryDark">
                    <svg
                        className="fill-current"
                        width="100%"
                        version="1.1"
                        viewBox="0 0 50 54.325"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g transform="translate(0 9.6506)">
                            <path d="m48.336 7.54c-0.701 0-1.359 7e-3 -2.018 0.024v-2.238h-0.734c-14.262 0-19.043 3.411-20.585 5.252-1.542-1.841-6.323-5.252-20.585-5.252h-0.734v2.237c-0.658-0.018-1.316-0.023-2.016-0.023h-1.664v32.35h1.664c17.595 0 21.186 4.035 21.698 4.784h3.302c0.557-0.784 4.218-4.784 21.673-4.784h1.663v-32.35zm-24.437 30.891c-2.457-1.812-7.611-3.914-18.383-4.054v-27.202c15.087 0.194 18.001 4.327 18.383 5zm20.585-4.054c-10.772 0.14-15.926 2.24-18.383 4.054v-26.247c0.416-0.737 3.412-4.814 18.383-5.007z" />
                        </g>

                        <g transform="translate(-3.4843 11.063)">
                            <path d="m28.654-9.0941q-0.375 0-0.75-0.21094-0.35156-0.21094-0.35156-0.72656 0-0.53906 0.16406-0.79688 0.46875-0.23438 1.1719-0.23438 1.4062 0 3 1.2422 1.6172 1.2422 1.6172 3.0938 0 1.2188-0.53906 2.0391-0.51562 0.79688-1.8281 1.5469-0.49219 0.28125-1.125 0.77344-0.60938 0.49219-0.70312 0.67969-0.23438 0.42188-0.23438 1.6172 0 0.30469-0.46875 0.30469-0.30469 0-0.30469-0.1875 0-0.30469-0.02344-1.0781 0-0.79688 0-1.125 0-0.28125 0.02344-0.51562 0.04687-0.25781 0.14062-0.46875 0.09375-0.23438 0.14062-0.39844 0.07031-0.16406 0.25781-0.35156 0.1875-0.1875 0.23438-0.28125 0.07031-0.09375 0.30469-0.25781 0.25781-0.16406 0.30469-0.21094 0.04687-0.046875 0.30469-0.21094 0.28125-0.1875 0.30469-0.1875 0.58594-0.375 0.82031-0.53906 0.25781-0.16406 0.60938-0.44531 0.35156-0.30469 0.46875-0.5625 0.14062-0.28125 0.14062-0.58594 0-1.0078-0.58594-1.5469-0.5625-0.53906-1.3125-0.53906-0.70312 0-1.125 0.09375-0.42188 0.070312-0.65625 0.070312zm-0.84375 13.008q-0.39844-0.42188-0.39844-0.98438t0.39844-0.9375q0.39844-0.39844 0.96094-0.39844t0.96094 0.39844q0.39844 0.375 0.39844 0.9375t-0.39844 0.98438q-0.39844 0.39844-0.96094 0.39844t-0.96094-0.39844z" />
                        </g>
                    </svg>
                </div>
                <p className="text-base text-center">{text}</p>
                <ActionButton
                    icon={ICON_RETRY}
                    textColor={'text-secondaryLight'}
                    text={'Try again'}
                    action={callback}
                    background={'bg-primaryDark'}
                />
            </div>
        </BaseModal>
    );
}

NoResultModal.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func.isRequired,
};

export default NoResultModal;
