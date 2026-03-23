import React, { useState } from 'react'
import { logicBuildingData } from '../html/logicBuildingData';
import LogicCard from './LogicCard';
import ProgressBar from './ProgressBar';

export default function LogicBuilding() {
    let steps = [
        { key: "if-else", label: "If-Else" },
        { key: "loops", label: "Loops" },
        { key: "pattern", label: "Pattern" }
    ]

    let [activeStep, setActiveStep] = useState("if-else")
    let filteredProblems = logicBuildingData.filter((item) => item.category === activeStep)
    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-2"><i className="bi bi-lightbulb-fill text-warning"></i> Logic Building</h2>
            <p className="text-secondary">Practice logical problems and improve your thinking step by step.</p>
            <ProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />

            <div className="mt-4">
                {filteredProblems.map((problem) => (
                    <LogicCard key={problem.id} problem={problem} />
                ))}
            </div>
        </div>
    )
}
