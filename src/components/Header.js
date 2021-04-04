 
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {

    function onClick(e){
        console.log('Hello Tanzania btn has clicked')
        console.log('my name is Mapunda')
        console.log(e.target.style.backgroundColor)
    }
   
    return (
        <header className = 'header'>
{/*           
            <h2 style={{}}> i started to like this React</h2>
            <h2>{props.title}</h2> */}
            <h1>This is the Add button</h1>
            <Button color='green' text='BTN 1' onClick={onClick}/><br/><br/>
            
            

        </header>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}


//This is a css in js
// const style = {
//     backgroundColor:'green',
//     color: 'green',
//     value: 'add'
    
// }
 

export default Header
