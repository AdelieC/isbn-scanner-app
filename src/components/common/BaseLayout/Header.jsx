//libraries
import NavBar from './NavBar';

//stylesheets
import './Header.css';
import PropTypes from 'prop-types';
import { CLASSLIST_H1 } from '../../../services/globals/classlists';
import { Link } from 'react-router-dom';

function Header({ title }) {
    return (
        <header className="fixed z-50 top-0 left-0 w-full flex items-center justify-between gap-4 shadow-xl py-4 px-4 sm:py-8 sm:px-10 bg-primaryDark text-primaryLight">
            <Link to={'/'} id="logo" className="h-12 sm:h-16">
                <svg
                    className="fill-current"
                    height="100%"
                    version="1.1"
                    viewBox="0 0 40.217 29.236"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g transform="translate(-81.817 -175.55)">
                        <g>
                            <path
                                d="m101.64 175.81v18.62h2.1254v-3.977h1.5012c0.86878 0 1.5801-0.1452 2.1348-0.43512v4.4121h1.464v-7.1231h-0.0176c0-3e-3 5.1e-4 -5e-3 5.1e-4 -8e-3v-2.0273c0-1.3366-0.60828-2.1697-1.8247-2.5001 1.0662-0.36042 1.5994-1.1792 1.5994-2.4557v-1.3513c0-0.99115-0.30774-1.7646-0.92346-2.3203-0.60073-0.55565-1.4869-0.83354-2.6582-0.83354zm2.1254 1.3519h1.2759c0.64575 0 1.1413 0.15746 1.4867 0.47283 0.3454 0.31536 0.5178 0.75846 0.5178 1.3291v1.3519c0 0.58568-0.1724 1.0509-0.5178 1.3963-0.33038 0.34541-0.82596 0.51831-1.4867 0.51831h-1.2759zm0 6.1944h1.5012c0.64575 0 1.1413 0.18063 1.4867 0.54105 0.34541 0.34541 0.5178 0.80342 0.5178 1.3741v2.0273c0 1.2014-0.66798 1.802-2.0045 1.802h-1.5012z"
                                strokeWidth=".52917"
                            />
                            <path
                                d="m113.37 175.81v18.62h2.4304v-15.096c0-0.46972 0.27789-0.95406 0.83354-1.4531 0.55565-0.49907 1.1639-0.74879 1.8247-0.74879 0.66076 0 1.1116 0.15425 1.3518 0.4625 0.2553 0.30825 0.38292 0.74136 0.38292 1.2992v15.536h1.5766v-15.536c0-2.055-1.1039-3.083-3.3114-3.083-1.0879 0-1.974 0.42714-2.6582 1.28v-1.28z"
                                strokeWidth=".52917"
                            />
                            <path
                                d="m111.16 175.67v18.893h0.85517v-18.893z"
                                strokeWidth=".25538"
                            />
                            <path
                                d="m98.47 175.67v18.893h0.85571v-18.893z"
                                strokeWidth=".25538"
                            />
                            <path
                                d="m93.025 175.81c-1.2615 0-2.2073 0.27206-2.8381 0.81545-0.61572 0.5287-0.92346 1.2851-0.92346 2.2691 0 0.66088 0.0824 1.2115 0.24753 1.6521 0.18021 0.4259 0.50288 0.86661 0.96842 1.3219l3.9646 3.7889c0.34541 0.33779 0.57081 0.66052 0.67593 0.96893 0.12014 0.29372 0.18035 0.69779 0.18035 1.2118 0 0.49933-0.18783 0.89587-0.56327 1.1896-0.37543 0.29372-0.93122 0.4408-1.6671 0.4408-0.73585 0-1.2911-0.14708-1.6666-0.4408-0.37478-0.29321-0.5626-0.70359-0.56327-1.2309v-1.9632h-1.5772v8.5958h1.5772v-4.0323c0.48789 0.21906 1.0886 0.3469 1.803 0.38241v3.6499h0.85421v-3.6499c0.7162-0.0356 1.3181-0.16391 1.8066-0.38396v4.0339h1.573v-6.7929h-1e-3c-6e-3 -0.62902-0.0872-1.15-0.2465-1.5606-0.16519-0.44059-0.46574-0.89585-0.90124-1.3658l-4.0318-3.7894c-0.36041-0.3231-0.59355-0.63128-0.69867-0.92501-0.10512-0.29372-0.15761-0.69779-0.15761-1.2118s0.17291-0.91757 0.51831-1.2113c0.36042-0.29372 0.89357-0.4408 1.5994-0.4408s1.2312 0.14708 1.5766 0.4408c0.36042 0.29373 0.54053 0.70481 0.54053 1.2335v1.9606h1.5772v-1.8722c0-2.0561-1.2088-3.0846-3.6267-3.0846z"
                                strokeWidth=".52917"
                            />
                            <path
                                d="m86.043 175.67v18.893h0.85571v-18.893z"
                                strokeWidth=".25538"
                            />
                            <path
                                d="m82.078 175.81v18.626h2.4374v-18.626z"
                                strokeWidth=".5226"
                            />
                        </g>
                        <path
                            transform="matrix(.26458 0 0 .26458 81.817 175.55)"
                            d="m8.7812 79.309c-2.4459 0-4.281 0.53985-5.5039 1.6172-1.1938 1.0482-1.791 2.5472-1.791 4.498 0 1.3103 0.16017 2.4019 0.48047 3.2754 0.34941 0.84442 0.97626 1.7184 1.8789 2.6211l7.6875 7.5117c0.66972 0.66971 1.1048 1.3104 1.3086 1.9219 0.23294 0.58235 0.34961 1.3832 0.34961 2.4023 0 0.99001-0.36386 1.777-1.0918 2.3594-0.72794 0.58235-1.8057 0.87305-3.2324 0.87305-1.4268 0-2.5025-0.2907-3.2305-0.87305-0.72794-0.58234-1.0918-1.399-1.0918-2.4473v-3.8867h-3.0586v3.7129c0 4.0765 2.46 6.1152 7.3809 6.1152 4.9209 0 7.3828-2.0388 7.3828-6.1152 0-1.3103-0.16017-2.388-0.48047-3.2324-0.3203-0.87352-0.90364-1.7753-1.748-2.707l-7.8184-7.5137c-0.69883-0.6406-1.1497-1.2516-1.3535-1.834-0.20382-0.58235-0.30469-1.3832-0.30469-2.4023 0-1.0191 0.3342-1.82 1.0039-2.4023 0.69882-0.58235 1.733-0.87305 3.1016-0.87305 1.3685 0 2.3869 0.2907 3.0566 0.87305 0.69882 0.58235 1.0488 1.399 1.0488 2.4473v3.8867h3.0566v-3.7129c0-4.0765-2.3433-6.1152-7.0312-6.1152zm21.84 0c-2.3876 0-4.1792 0.53985-5.373 1.6172-1.1938 1.0482-1.7891 2.5472-1.7891 4.498v17.471c0 1.9509 0.61104 3.4656 1.834 4.543 1.2229 1.0482 3.0284 1.5723 5.416 1.5723 2.3877 0 4.1773-0.52403 5.3711-1.5723 1.1938-1.0773 1.791-2.5921 1.791-4.543v-2.4023h-3.0566v2.4023c0 2.3294-1.3842 3.4941-4.1504 3.4941-2.7662 0-4.1484-1.1647-4.1484-3.4941v-17.471c0-2.3294 1.3823-3.4941 4.1484-3.4941 2.7662-1e-6 4.1504 1.1647 4.1504 3.4941v4.1484h3.0566v-4.1484c0-1.9509-0.61104-3.4498-1.834-4.498-1.2229-1.0773-3.0284-1.6172-5.416-1.6172zm18.703 0.65625-6.4199 28.389h3.0566l1.4863-6.5508h8.3418l1.4844 6.5508h3.0586l-6.4219-28.389zm17.102 0v28.389h3.0566v-21.838l9.4785 21.838h3.0566v-28.389h-3.0566v21.838l-9.4785-21.838zm24.311 0v28.389h3.0586v-21.838l9.4766 21.838h3.0586v-28.389h-3.0586v21.838l-9.4766-21.838zm24.313 0v28.389h12.885v-2.6191h-9.8262v-10.482h7.6426v-2.6211h-7.6426v-10.047h9.3887v-2.6191zm19.449 0v28.389h3.0586v-10.045h3.5371l5.1113 10.045h3.3613l-5.3711-10.482c2.5624-0.8153 3.8438-2.7077 3.8438-5.6777v-6.1152c0-1.9218-0.59719-3.4207-1.791-4.498-1.1647-1.0773-2.8831-1.6152-5.1543-1.6152zm3.0586 2.6191h3.5371c1.2521 0 2.2131 0.30649 2.8828 0.91797 0.66971 0.61148 1.0039 1.4697 1.0039 2.5762v6.1152c0 2.3294-1.2952 3.4941-3.8867 3.4941h-3.5371zm-85.961 0.78711 3.582 15.811h-7.1641z"
                            strokeWidth="2.9737"
                        />
                    </g>
                </svg>
            </Link>
            <h1 id="title" className={CLASSLIST_H1 + 'hidden sm:block'}>
                {title || 'ISBN-scanner'}
            </h1>
            <NavBar />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Header;
