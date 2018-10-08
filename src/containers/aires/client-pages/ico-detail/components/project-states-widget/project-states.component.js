import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import themeStyles from './project-states.theme.style';

import scss from './project-states.module.scss';

class ProjectStatesWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

  const { classes } = this.props;

  return (
    <div className={scss['portal-project-stepper']}>
      <div role="progressbar" className={classes['portal-project-stepper__progress']}>
        <div className={classNames(scss['portal-project-stepper__progress-bar'], classes['portal-project-stepper__progress-bar--background'])}></div>
      </div>
      <div className={classNames(scss['portal-project-stepper__step'], scss['portal-project-stepper__step--done'])}>
        <h3 className={classNames(scss['portal-project-stepper__step__heading'], scss['portal-text-medium'])}>
          PreSale
        </h3>
        <p className={classNames(scss['portal-project-stepper__step__content'], scss['mdc-typography--body1'])}>
          In this phase initial research will be required. Also the framework and the assets to be used have to be decided.
        </p>
      </div>
      <div className={classNames(scss['portal-project-stepper__step'], scss['portal-project-stepper__step--done'])}>
        <h3 className={classNames(scss['portal-project-stepper__step__heading'], scss['portal-text-medium'])}>
          Soft Cap
        </h3>
        <p className={classNames(scss['portal-project-stepper__step__content'], scss['mdc-typography--body1'])}>
          In this phase the design process will take place. All components will be created as HTML and CSS working prototypes.
        </p>
      </div>
      <div className={scss['portal-project-stepper__step']}>
        <h3 className={classNames(scss['portal-project-stepper__step__heading'], scss['portal-text-medium'])}>
          Hard Cap
        </h3>
        <p className={classNames(scss['portal-project-stepper__step__content'], scss['mdc-typography--body1'])}>
          In the final stage the prototype will be tested on various devices including desktop computer and mobile devices.
        </p>
      </div>
    </div>
  );
}
}

ProjectStatesWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(ProjectStatesWidget);
