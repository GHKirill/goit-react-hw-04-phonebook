import React, { Component } from 'react';
import { Section } from './Feedbacks/Section/Section';
import { FeedbackOptions } from './Feedbacks/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Feedbacks/Statistics/Statistics';
import css from 'components/Feedbacks/FeedbackOptions/Feedback.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  styledButtonAfterClick = event => {
    event.target.classList.add(`${css.active}`);
    setTimeout(() => {
      event.target.classList.remove(`${css.active}`);
    }, 300);
  };
  onButtonClick = event => {
    const { name } = event.currentTarget;
    this.styledButtonAfterClick(event);
    return this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return !this.countTotalFeedback()
      ? 0
      : Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          ></FeedbackOptions>
        </Section>
        <Section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}
