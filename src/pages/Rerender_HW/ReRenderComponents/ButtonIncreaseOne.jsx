import { memo } from "react";

const PlusOneButton = ({ children, onClick }) => {
    console.log("PlusOneButton rerendered");
    return <button onClick={onClick}>{children}</button>;
};
export default memo(PlusOneButton, (prevProps, nextProps) => {
    if(prevProps.onClick != nextProps.onClick) {
        return false;
    }
        return true;
    });