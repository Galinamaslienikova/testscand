import React from "react";
import './Progressbar.style'

export class Progressbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {number,item,index,counts}=this.props
        return(
            <>
            <p className="firstCircle"><span className={number===index?"number isActiveCircle":number>index?"number isActiveCircle check":"number"}>{number<=index?index+1:''}</span><span style={{left:item.text.length>15?'-150%':'-50%'}} className={number>=index?'name activeName ':"name"}>{item.text}</span></p>
            {index===counts-2?'':<p style={{width:counts<4?100-(100/(counts+counts*3))*8-counts*2+'%':100/counts.length-2+'%'}} className={number>index?"secondLine isActiveLine":"secondLine"}></p>}
            </>
        )
    }
}
