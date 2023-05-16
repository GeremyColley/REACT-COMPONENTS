import { useState , memo} from 'react'
import ComponentOneInt from './ComponentOneInt';

// Memo

const ComponentOneExt = (props) => {
    const [countOneExt, setCountOneExt] = useState(0)
    console.log("Re-render ComponentOneExt");
    return (
        <>
            <ComponentOneInt message={"Colley"} /> 
            <h1>ComponentOneExt - {props.message}</h1>
            <h2>APP - Count : {countOneExt}</h2>
            <button onClick={() => setCountOneExt(countOneExt+1)}> + Count</button>
            <button onClick={() => setCountOneExt(countOneExt-1)}> - Count</button>
        </>
    );
};

export default memo(ComponentOneExt);
