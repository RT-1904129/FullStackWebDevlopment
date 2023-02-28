import React from 'react';
import styles from './Button.module.css';
// import styled from 'styled-components';

// import './Button.css';

// // styled components are used to put css property but it useful in large code base because here there is no proble of same
// // class name in different component
// const Button = styled.button`
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//   @media (min-width: 768px) {
//       width: auto;
//     }
  
//   &:focus {
//     outline: none;
//   }
  
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }`
//   ;
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };


// CSS module is used to put css property but it useful in large code base because here there is no problem of same naming of css class 
// but it automatically change the css function name but its name is little readable(you can easly understand) but styled css is not readable .

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;

