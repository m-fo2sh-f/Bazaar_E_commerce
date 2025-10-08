

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StepConnector, useTheme } from '@mui/material';
import CartSection from './CartSection/CartSection';
import DetailsSection from './DetailsSection/DetailsSection';
import PaymentSection from './PaymentSection/PaymentSection';
import ReviewSection from './ReviewSection/ReviewSection';


const steps = ['Cart', 'Details', 'Payment', 'Review'];

export default function Cart() {

    const theme = useTheme()
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };



    return (
        <Box sx={{ width: '100%', mx: 'auto', zIndex: 55, my: '50px' }}>
            <Stepper sx={{ display: { md: 'flex', xs: 'none' }, width: { lg: '50%', md: '70%', sm: '90%' }, mx: 'auto' }} nonLinear activeStep={activeStep} >
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton
                            sx={{
                                zIndex: 55,
                                bgcolor: activeStep === index
                                    ? theme.palette.secondary.main // اللون الأزرق عند النشاط
                                    : completed[index]
                                        ? 'red'  // اللون الأحمر عند اكتمال الخطوة
                                        : theme.palette.primary.main,  // اللون الجراي عندما لا تكتمل
                                textWrap: 'nowrap',
                                borderRadius: '50px',
                                height: '40px',
                                minHeight: '20px',
                                p: '0 20px',
                                width: 'fit-content',
                                position: 'relative',
                                '& .MuiStepIcon-root': {
                                    display: 'none',
                                },
                            }}
                            color="inherit"
                            onClick={handleStep(index)}
                        >
                            <Typography variant="button" sx={{
                                color: activeStep === index
                                    ? theme.palette.primary.main // اللون الأزرق عند النشاط
                                    : completed[index]
                                        ? 'red'  // اللون الأحمر عند اكتمال الخطوة
                                        : theme.palette.secondary.main,
                            }}>
                                {index + 1}. {label} {/* عرض الرقم داخل الدائرة */}
                            </Typography>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === 0 && (
                    <CartSection handleNext={handleNext} />
                )}
                {activeStep === 1 && (
                    <DetailsSection handleNext={handleNext} handleBack={handleBack} />
                )}
                {activeStep === 2 && (
                    <PaymentSection />

                )}
                {activeStep === 3 && (
                    <ReviewSection />

                )}
            </div>
        </Box >
    );
}
