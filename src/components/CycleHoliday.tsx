import React, { useState } from "react";
import { Button } from "react-bootstrap";


type Holiday = "🎄" | "🎃" | "🎆" | "🍂" | "🦃";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆"); 

    const alphabetOrder: Holiday[] = ["🎄", "🎆", "🎃", "🍂", "🦃"];

    const yearOrder: Holiday[] = ["🎆", "🍂", "🦃", "🎃", "🎄"];

    function advanceByAlphabet(): void {
        const currentIndex = alphabetOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % alphabetOrder.length; 
        setHoliday(alphabetOrder[nextIndex]);
    }

    function advanceByYear(): void {
        const currentIndex = yearOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % yearOrder.length; 
        setHoliday(yearOrder[nextIndex]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
