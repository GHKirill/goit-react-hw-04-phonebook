import PropTypes from 'prop-types';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import css from './Statistisc.module.css';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h3>Statistics</h3>
      {!total ? (
        <NotificationMessage message={'There is no feedback'} />
      ) : (
        <>
          <p>
            Good: <span className={css.info}>{good}</span>
          </p>
          <p>
            Neutral: <span className={css.info}>{neutral}</span>
          </p>
          <p>
            Bad: <span className={css.info}>{bad}</span>
          </p>
          <p>
            Total: <span className={css.info}>{total}</span>
          </p>
          <p>
            Positive feedback:
            <span className={css.info}>{positivePercentage}</span>%
          </p>
        </>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
