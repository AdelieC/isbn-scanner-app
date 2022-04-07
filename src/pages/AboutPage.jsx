//libraries
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
//services
//components
import WorkInProgress from '../components/reused/WorkInProgress';

const TITLE = 'About us';

function AboutPage() {
    const { setTitle } = useOutletContext();

    useEffect(() => {
        setTitle(TITLE);
    }, []);

    return <WorkInProgress />;
}

export default AboutPage;
