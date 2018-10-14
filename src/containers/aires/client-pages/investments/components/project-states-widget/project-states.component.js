import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import themeStyles from './project-states.theme.style';

import scss from './project-states.module.scss';

const ProjectStatesWidget = (props) => {
  const { classes } = props;

  return (
    <div className={scss['portal-project-stepper']}>
      <div role="progressbar" className={classes['portal-project-stepper__progress']}>
        <div className={classNames(scss['portal-project-stepper__progress-bar'], classes['portal-project-stepper__progress-bar--background'])}></div>
      </div>
      <div className={classNames(scss['portal-project-stepper__step'], scss['portal-project-stepper__step--done'])}>
        <h3 className={classNames(scss['portal-project-stepper__step__heading'], scss['portal-text-medium'])}>
          Phase 01
        </h3>
        <p className={classNames(scss['portal-project-stepper__step__content'], scss['mdc-typography--body1'])}>
        </p>
      </div>
      <div className={classNames(scss['portal-project-stepper__step'], scss['portal-project-stepper__step--done'])}>
        <h3 className={classNames(scss['portal-project-stepper__step__heading'], scss['portal-text-medium'])}>
          Phase 02
        </h3>
        <p className={classNames(scss['portal-project-stepper__step__content'], scss['mdc-typography--body1'])}>
        </p>
      </div>
      <div className={scss['portal-project-stepper__step']}>
        <h3 className={classNames(scss['portal-project-stepper__step__heading'], scss['portal-text-medium'])}>
          Phase 03
        </h3>
        <p className={classNames(scss['portal-project-stepper__step__content'], scss['mdc-typography--body1'])}>
        </p>
      </div>
    </div>
  );
}

ProjectStatesWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(ProjectStatesWidget);
