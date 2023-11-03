import { CounterContainer, CounterContainerParagraph } from "./TaskCounter.styled"
import { useTaskCount } from "redux/hooks/useTaskCount"

export const TaskCounter = () => {

    const {active, completed } = useTaskCount();

    return (
        <CounterContainer>
            <CounterContainerParagraph>Active: {active} </CounterContainerParagraph>
            <CounterContainerParagraph>Completed: {completed} </CounterContainerParagraph>
        </CounterContainer>
    )
}