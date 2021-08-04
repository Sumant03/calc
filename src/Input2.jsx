let Input2=(props)=>{
  
    return(
        <div>
            <input value={props.currInput2}  
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                 props.handleTasks2();
              }
              }} 

            onChange={(e,index)=>{
              props.setValue2(e,index);
            }} />
        </div>
    )
}
export default Input2;