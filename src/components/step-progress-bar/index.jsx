function StepProgressBar({ steps, activeStep, setActiveStep }) {

    return (
        <div>
          <div className="steps">
            {steps && steps.length > 0
              ? steps.map((stepItem, index) => (
                  <div className={`step ${index <= activeStep ? 'active' : ''}`} style={{ width: calculateCurrentStepWidth() }} key={index}>
                    {stepItem}
                  </div>
                ))
                <div>
                <div className="step-buttons-wrapper">
                    <button>Previous Step</button>
                    <button>Next Step</button>
                </div>
                </div>

}
