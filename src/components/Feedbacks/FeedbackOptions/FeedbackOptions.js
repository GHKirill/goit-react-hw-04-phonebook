import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttonsContainer}>
      {options.map((option, index) => {
        return (
          <button
            type="button"
            key={option}
            name={option}
            // onClick={event => onLeaveFeedback[index](event)}
            onClick={event => onLeaveFeedback(event)}
            className={css.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
