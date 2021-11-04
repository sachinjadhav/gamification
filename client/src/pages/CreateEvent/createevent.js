import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import {
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepButton,
  Container,
} from "@mui/material";
import { Segment } from "semantic-ui-react";
import BasicFormValidation from "./eventdetails";

const styles = (theme) => ({});

function getSteps() {
  return ["Event Details", "Rules", "Sub Event"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicFormValidation />;
    case 1:
      return "Rules";
    case 2:
      return "Sub Event";
    default:
      return "Unknown step";
  }
}

class HorizontalLinearStepper extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  state = {
    activeStep: 0,
    skipped: new Set(),
  };

  isStepOptional = (step) => {
    return step === 1;
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    const skipped = new Set(this.state.skipped.values());
    skipped.add(activeStep);
    this.setState({
      activeStep: this.state.activeStep + 1,
      skipped,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleStep = (step) => () => {
    this.setState({
      activeStep: step,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Segment>
        <Container maxWidth="xlg">
          <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton color="inherit" onClick={this.handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&quot;re finished
                  </Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    {this.isStepOptional(activeStep) && (
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={this.handleSkip}
                        className={classes.button}
                      >
                        Skip
                      </Button>
                    )}
                    <Button
                      variant="raised"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default withStyles(styles)(HorizontalLinearStepper);
