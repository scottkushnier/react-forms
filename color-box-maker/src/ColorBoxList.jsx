
import { useState } from 'react'
import ColorBox from './ColorBox.jsx'
import NewBoxForm from './NewBoxForm.jsx';

let keyInd = 1;
function newKey() {
    const res = keyInd;
    keyInd++;
    return res;
}

// const initialList = [{color: "khaki", height: "30px", width: "30px", key: newKey()},
//   {color: "orange", height: "40px", width: "30px", key: newKey()},
//   {color: "lightgreen", height: "20px", width: "30px", key: newKey()}];

const initialList = [];

function ColorBoxList() {
    const removeBoxWithKey = key => setColorBoxes(colorBoxes.filter(box => (box.key != key)));
    const addBox = (formData) => {
      const {color, height, width} = formData;
      setColorBoxes([...colorBoxes, {color, height: height+'px', width: width+'px', key: newKey()}]);
    }
    const [colorBoxes, setColorBoxes] = useState(initialList);
    return (
        <div data-testid="boxlist">
          {colorBoxes.map(({color, height, width, key}) => {
               return <ColorBox color={color} key={key} height={height} width={width} 
                            deleteFn={() => {removeBoxWithKey(key)}}
                      />
          })}
          <NewBoxForm AddFn={addBox}/>
        </div>
    )
}

export default ColorBoxList;