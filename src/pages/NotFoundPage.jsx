import { CLASSLIST_H1 } from '../services/globals/classlists';
import { ICON_HOME_BUTTON, ICON_LOST } from '../services/globals/icons';
import LinkButton from '../components/reused/LinkButton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ISBN = '9782253161158';

function NotFoundPage(props) {
    const { t } = useTranslation(['errors', 'routes']);

    return (
        <div className="p-8 sm:p-12 grow flex flex-col justify-around items-center text-primaryDark max-w-2xl text-center">
            <h1 className={CLASSLIST_H1 + 'text-secondaryDark'}>{t('404.title')}</h1>
            {ICON_LOST}
            <p>
                {t('404.text-part1')}
                <Link className="inline underline" to={t('routes:book-path') + ISBN}>
                    {t('404.book-title')}
                </Link>
                {t('404.text-part2')}
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
