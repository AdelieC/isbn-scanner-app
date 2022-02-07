import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AnimatedLink = ({ to, name, icon }) => {
    const resolve = useResolvedPath(to);
    const match = useMatch({ path: resolve.pathname });
    const linkClasses = classNames(
        'w-full',
        'block',
        'p-5',
        'flex',
        'items-center',
        'justify-center',
        'gap-8',
        {
            'bg-secondaryLight': match,
            'text-secondaryDark': match,
        }
    );
    return (
        <Link to={to} className={linkClasses}>
            {icon}
            {name}
        </Link>
    );
};

AnimatedLink.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.element,
};

export default AnimatedLink;
