import React, { useState } from 'react';
import { Section } from './Feedbacks/Section/Section';
import { FeedbackOptions } from './Feedbacks/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedbacks/Statistics/Statistics';
import css from 'components/Feedbacks/FeedbackOptions/Feedback.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackStatuses = { good, neutral, bad };

  const styledButtonAfterClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
  };
  const onButtonClick = event => {
    const { name } = event.currentTarget;
    styledButtonAfterClick(event);
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return !countTotalFeedback()
      ? 0
      : Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedbackStatuses)}
          onLeaveFeedback={onButtonClick}
        ></FeedbackOptions>
      </Section>
      <Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </>
  );
}
