import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const FeedbackButtons = ({ state, feedbackReducer, feedbackReducerDuble }) => {
  return state.map((btnName, i) => {
    return (
      <button
        key={btnName}
        type="button"
        name={btnName}
        className={styles[btnName]}
        onClick={() => feedbackReducer(btnName)}
        // onDoubleClick={() => feedbackReducerDuble(btnName)}
      >
        {btnName}
      </button>
    );
  });
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  feedbackReducer: PropTypes.func.isRequired,
};

export default FeedbackButtons;
