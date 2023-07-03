import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick, children, showButton, disabled } = this.props;
    return (
      <button className={css.btn} onClick={onClick} disabled={disabled}>
        {showButton ? children : null}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
