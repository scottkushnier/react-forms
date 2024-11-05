
function ColorBox({color, width="50px", height="50px", deleteFn}) {
    return (
        <div>
          <div className='box' style={{backgroundColor: color, width, height}}>
          </div>
          <button onClick={deleteFn}>X</button>
        </div>
    )
  }

  export default ColorBox;