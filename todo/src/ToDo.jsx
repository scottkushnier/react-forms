
function ToDo({text, deleteFn}) {
    return (
        <div>
           <button onClick={deleteFn}>x</button>
           <div className='todo'>
           &nbsp; {text}
          </div>
        </div>
    )
  }

  export default ToDo;