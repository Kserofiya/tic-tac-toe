import styles from "./fieldlayout.module.css";
import PropTypes from 'prop-types';

export const FieldLayout = ({field, fieldChange}) => {
	return (
		<div className={styles.field}>
			{field.map((item, index) => (
				<div key={index} onClick={() => fieldChange(index)} className={styles.field__item}>{item}</div>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	fieldChange: PropTypes.func
};
