import { memo } from "react";

const NumberTextBox = ({ txtValue , onChange }) => {
    console.log("TextBox rerendered");
    return <input type="number" value={txtValue} onChange={onChange} />;
};
export default memo(NumberTextBox, (prevProps, nextProps) => {
    if (prevProps.txtValue != nextProps.txtValue) {
        return false; // rerender
    } else {
        return true; // don't rerender
    }
});