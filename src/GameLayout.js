import { Information } from "./Components/Information/Information";
import { Field } from "./Components/Field/Field";
import PropTypes from 'prop-types';
import styles from './gamelayout.module.css';

export const GameLayout = ({currentPlayer, isGameEnded, isDraw, field, replace, fieldChange}) => {
	return (
		<div>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				currentPlayer={currentPlayer}
				fieldChange={fieldChange}
			/>
			<button className={styles.game__btn} type="text" onClick={replace}>Начать заново</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	replace: PropTypes.func,
	fieldChange: PropTypes.func
};
