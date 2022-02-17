import { Progressbar } from "@scandipwa/scandipwa/src/component/Progressbar/Progressbar.component";
import React from "react";
import './Progressbar.style'

export class ProgressbarContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {steps_name,activeStep}=this.props
        const number=steps_name.findIndex((item)=>{
            return item.name===activeStep
        })
        const result=steps_name.map((item,index)=>{
            return item.text===''?'':<Progressbar counts={steps_name.length} number={number} item={item} index={index} />
        })

        return(
            <div >
                <div className="progressBar">
                  <p style={{width:steps_name.length<4?(100/(steps_name.length+steps_name.length*3))*4+'%':100/steps_name.length-2+'%'}} className="firstLine isActiveLine"></p>
                   {result}
                   <p style={{width:steps_name.length<4?(100/(steps_name.length+steps_name.length*3))*4+'%':100/steps_name.length-2+'%'}}   className={number===steps_name.length-1?"firstLine isActiveLine":"firstLine"}></p>
                </div>
                <div className="names"></div>
            </div>
        )
    }
}
