import { Fragment, useState, useCallback } from "react";
import PlusOneButton from "./ReRenderComponents/ButtonIncreaseOne";
import MinusOneButton from "./ReRenderComponents/ButtonReduceOne";
import NumberTextBox from "./ReRenderComponents/textBox"

const ReRenderPage = () => {
    const [txt, setTxt] = useState(0);
    // const handleTxtChange = (e) => {
    //     if(typeof(e.target.value) == "number"){
    //         setTxt(e.target.value);
    //     }
    // };
    const handleTxtChange = useCallback((e) => {
        console.log("txt from box", txt);
        // if(typeof(e.target.value) == "number"){
        //     setTxt(e.target.value);
        // }
        setTxt(e.target.value);
    }, [txt]);
    const plusOneClick = useCallback(() => {
        console.log("txt from box", txt);
        setTxt(txt + 1);
    }, [txt]);
    const minusOneClick = useCallback(() => {
        console.log("txt from box", txt);
        setTxt(txt - 1);
    }, [txt]);
    return (
        <Fragment>
            {/* <input type="number" value={txt} onChange={handleTxtChange} /> */}
            <NumberTextBox txtValue={txt} onChange={handleTxtChange}></NumberTextBox>
            <PlusOneButton onClick={plusOneClick}>Increase By One</PlusOneButton>
            <MinusOneButton onClick={minusOneClick}>Decrease By One</MinusOneButton>
        </Fragment>
    );
}

export default ReRenderPage;