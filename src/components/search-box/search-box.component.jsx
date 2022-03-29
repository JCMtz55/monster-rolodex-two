// import { Component } from 'react'
import './search-box.styles.css'


const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input 
  className={className} 
  type="search" 
  placeholder={placeholder}
  onChange={(event) => onChangeHandler(event)}/>
)

// class SearchBoxClass extends Component {
//   render(){
//     const { onChangeHandler, placeholder, className } = this.props
//     return (
//       <input 
//         className={className} 
//         type="search" 
//         placeholder={placeholder}
//         onChange={(event) => onChangeHandler(event)}/>
//     )
//   }
// }

export default SearchBox