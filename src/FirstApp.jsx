// import {Fragment} from 'react'
import PropTypes from 'prop-types';


// const getResult = (a, b) =>{
//     return a + b;
// }
// const newMessage = {
//     message: 'Hola Mundo',
//     title:'Cristian',
// }
export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
        <h1>{title}</h1>
        {/* <h1>{getResult(2,4)}</h1> */}
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <p>{subTitle }</p>
        <p>{name}</p>
    </>
    
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  name: 'Cristian Angel',
  subTitle: 'No hay subTitulo',
  title: 'No hay titulo'
}
