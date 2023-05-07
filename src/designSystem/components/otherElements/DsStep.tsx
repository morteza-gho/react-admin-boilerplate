import { FC } from "react";

interface IPropTypes {
  type: 'blue' | 'blue-light' | 'green',
  allSteps: number,
  completedSteps: number,
  className?: string
}

const DsStep: FC<IPropTypes> = ({ type, allSteps, completedSteps, className }) => {
  return (
    <div className={`steps step-${type} ${className ? className : ''}`}>
      {
        /* here is for completed steps */
        /* create an array like [0, 1, 2, 3] with [...Array(completedSteps).keys()] */
        /* for example: (completedSteps = 1) => so we have an array like [0] */
        completedSteps <= allSteps ?
          [...Array(completedSteps).keys()].map((number) => {
            const stepNumber = number + 1;
            return (
              <div className='step completed' key={number + 1}>
                <p className="title">{stepNumber}/{allSteps}</p>
                <div className='progress'>
                  <div className='filled'></div>
                </div>
              </div>
            )
          })
          :
          <p className="text-red-main">warning: "completedSteps" prop is incorrect</p>
      }

      {
        /* here for not completed and current steps */
        /* other steps is (allSteps - completedSteps) for example: (4-1=3) => so we have an array like [0, 1, 2] */
        completedSteps <= allSteps &&
        [...Array(allSteps - completedSteps).keys()].map((number) => {
          const stepNumber = completedSteps + number + 1; // for example: (completedSteps = 1) => so 1 + 0 + 1 => so first step will be 2
          const currentStep = completedSteps + 1; // for example: (completedSteps = 1) => so step number in first loop will be 2 | step number start at 2
          return (
            <div className={`step ${stepNumber === currentStep ? 'current' : ''}`} key={completedSteps + number + 1}>
              <p className="title">{stepNumber}/{allSteps}</p>
              <div className='progress'>
                <div className='filled'></div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default DsStep;