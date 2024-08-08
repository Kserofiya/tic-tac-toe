import PropTypes from 'prop-types';

export const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => {
	let text = "";

	if (isDraw === true) text = 'Ничья';
	if (isDraw === false && isGameEnded === true) text = `Победа: ${currentPlayer}`;
	if (isDraw === false && isGameEnded === false) text = `Ходит: ${currentPlayer}`;

	return (
		<div>
			<p className="information__text">
				{text}
			</p>
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
