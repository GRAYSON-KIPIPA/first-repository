

const Button = ({color, text, onClick}) => {

  


    return <button onClick={onClick} style={{backgroundColor: color}} className='btn'>
        {color, text}
        </button>
}
 

export default Button
