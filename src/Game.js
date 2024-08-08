import { useState } from "react";
import { GameLayout } from "./GameLayout";
import styles from './game.module.css';

export const Game = () => {

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	  ]);


	const replace = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField([
			'', '', '',
			'', '', '',
			'', '', '',
		  ])
	}

	const isWin = (updatedField, currentPlayer) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			if (WIN_PATTERNS[i].every(item => {return updatedField[item] === currentPlayer})) {
				return true;
			};
		}
	}


	const fieldChange = (index) => {

		if (field[index] === "" && isGameEnded === false) {
			setField(prevField => {
			return	[
				...prevField.slice(0, index),
				currentPlayer,
				...prevField.slice(index + 1, prevField.length),
			]
			});
		}

		const updatedField = field.toSpliced(index, 1, currentPlayer);

		if (isWin(updatedField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (
			!isWin(updatedField, currentPlayer) &&
			!updatedField.some((el) => el === '')
		) {
			setIsDraw(true);
		} else if (
			!isWin(updatedField, currentPlayer) &&
			updatedField.some((el) => el === '')
		) {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	return (
		<div className={styles.game__container}>
			<GameLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				field={field}
				replace={replace}
				fieldChange={fieldChange}
			/>
		</div>
	);
};
