//libraries
import {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

//TODO : add error boundary, loader and error/success modal
const StatusContext = createContext()

function StatusProvider({children}) {
	return (
		<StatusContext.Provider
			value={{

			}}>
			{children}
		</StatusContext.Provider>
	);
}

StatusProvider.propTypes = {
	children: PropTypes.node
};

export const useStatusContext = () => useContext(StatusContext)

export default StatusProvider;