import { memo } from "react";

const MinusOneButton = ({ children, onClick }) => {
    console.log("MinusOneButton rerendered");
    return <button onClick={onClick}>{children}</button>;
};
export default memo(MinusOneButton, (prevProps, nextProps) => {
    if(prevProps.onClick !== nextProps.onClick) {
        return false;
    }
        return true;
    });