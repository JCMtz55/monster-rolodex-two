import {  useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, set]
  const [monsters, setMonsters] = useState([]); //[value, set]
  const [filteredMonsters, setfilteredMonsters] = useState(monsters); //[value, set]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, [])// callback, array of dependencies

  useEffect(() =>{ 
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setfilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  
  return(
    <div className="App">
      <h1 className='app-title'>MONSTERS ROLODEX</h1>
      <SearchBox 
        className='search-box' 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters...'/>
        
        <CardList items={ filteredMonsters }/>
    </div>
  )
}

export default App;

// class AppAsClass extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   //constructor => render => componentDidMount => render
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(
//       () => { 
//         return { monsters: users }
//       },
//       () => {
//         //console.log(this.state.monsters)
//       }
//     ))
//   }

//   //use functions to not create anonymous fucntions that will be rerendered each time 
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => { return { searchField }})
//   }

//   render() {

//     //Deconstructuring to make it more readable
//     const {monsters, searchField} = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//           <h1 className='app-title'>MONSTERS ROLODEX</h1>
//           <SearchBox 
//             className='search-box' 
//             onChangeHandler={onSearchChange} 
//             placeholder='search monsters...'/>
            
//           <CardList items={ filteredMonsters }/>
//       </div>
//     )
//   }
// }

