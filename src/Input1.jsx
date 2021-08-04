let Input1=(props)=>{
  
    return(
        <div>
            <input value={props.currInput1}  
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                 props.handleTasks1();
              }
              }} 

            onChange={(e,index)=>{
              props.setValue1(e,index);
            }} />
        </div>
    )
}
export default Input1;