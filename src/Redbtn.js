import React from 'react'

function Redbtn({color1, text}) {

    function click(){
        console.log('click');
    }

    return (
        <div >
            <button style={redbtn} onClick={click} >{text}</button>
        </div>
    )
}

const redbtn= {
backgroundColor: 'yellow',
fontSize:30,
float:'right',
}




export default Redbtn
