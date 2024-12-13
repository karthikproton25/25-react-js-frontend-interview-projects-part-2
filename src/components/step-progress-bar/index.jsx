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
}
