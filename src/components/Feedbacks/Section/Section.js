// import React, { Component } from 'react';
// import { Statistics } from '../Statistics/Statistics';
// import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
//import { Notification } from './Notification/Notification';
import css from './Section.module.css';
import PropTypes from 'prop-types';
export function Section({ title, children }) {
  return (
    <div className={css.section}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
