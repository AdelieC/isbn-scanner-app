import { CLASSLIST_H1 } from '../services/globals/classlists';
import { ICON_HOME_BUTTON, ICON_LOST } from '../services/globals/icons';
import LinkButton from '../components/reused/LinkButton';
import { Link } from 'react-router-dom';

const ISBN = '9782253161158';

function NotFoundPage(props) {
    return (
        <div className="p-8 sm:p-12 grow flex flex-col justify-around items-center text-primaryDark max-w-2xl text-center">
            <h1 className={CLASSLIST_H1 + 'text-secondaryDark'}>You seem lost?</h1>
            {ICON_LOST}
            <p>
                Don't panic! Unlike{' '}
                <Link className="inline underline" to={'/book/' + ISBN}>
                    Robinson Crusoé
                </Link>{' '}
                you're not alone, stranded on a deserted island. We'll bring you back home
                in no time!
            </p>
            <LinkButton
                link={'/'}
                buttonText={'Get back home'}
                background={'bg-successDark'}
                textColor={'text-successLight'}
                icon={ICON_HOME_BUTTON}
            />
        </div>
    );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
