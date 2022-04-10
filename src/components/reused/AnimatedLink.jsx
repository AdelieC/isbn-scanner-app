import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AnimatedLink = ({ to, name, icon }) => {
    const resolve = useResolvedPath(to);
    const match = useMatch({ path: resolve.pathname });
    const linkClasses = classNames(
        'w-full',
        'block',
        'p-3',
        'flex',
        'items-center',
        'justify-center',
        'gap-4',
        'sm:gap-8',
        'text-xl',
        'sm:text-2xl',
        'md:text-3xl',
        'relative',
        'hover:scale-125',
        'hover:dropShadow',
        'active:animate-ping',
        'transition-all',
        'duration-100',
        {
            'bg-secondaryLight': match,
            'text-secondaryDark': match,
        }
    );
    return (
        <Link to={to} className={linkClasses}>
            {icon}
            <span className="relative pt-4 pb-3">{name}</span>
        </Link>
    );
};

AnimatedLink.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.element,
};

export default AnimatedLink;
