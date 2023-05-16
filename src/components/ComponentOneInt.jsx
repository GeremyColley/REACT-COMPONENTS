import { useState, memo } from 'react'

// Memo

const ComponentOneInt = (props) => {
    const [countOneInt, setCountOneInt] = useState(0)
    console.log("Re-render ComponentOneInt");
    return (
        <>

            <h1>ComponentOneInt - {props.message}</h1>
            <h2>APP - Count : {countOneInt}</h2>
            <button onClick={() => setCountOneInt(countOneInt+1)}> + Count</button>
            <button onClick={() => setCountOneInt(countOneInt-1)}> - Count</button>
        </>
    );
};

export default memo(ComponentOneInt);


