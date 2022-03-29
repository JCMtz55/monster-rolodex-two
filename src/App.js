import { Component } from 'react'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(
      () => { 
        return { monsters: users }
      },
      () => {
        //console.log(this.state.monsters)
      }
    ))
  }

  
  render(){

    const {search} = this.state;
    const filterMonsters = (text) => {
      const searchString = text.toLocaleLowerCase();
      this.setState( () => {return {search: searchString}})
    }

    return (
      <div className="App">

        <input className='search-box' 
        type="text" 
        placeholder='search monsters...' 
        onChange={(event) => filterMonsters(event.target.value)} />

        {
          this.state.monsters
          .filter(monster => monster.name.toLowerCase().includes(search))
          .map(monster => { 
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }

      </div>
    );
  }  
}

export default App;
