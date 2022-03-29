// import { Component } from 'react'
import Card from '../../components/card/card.component'

import './card-list.styles.css'

const CardList = ({items}) => (
  <div className='card-list'>
    {
      items.map(item => {
        return (
        <Card key={item.id} item={item}/>
        )
      })
    }
  </div>
);


export default CardList;

// class CardListClass extends Component {
  
//   render() {
//     const { items } = this.props
//     return(
//       <div className='card-list'>
//         {
//           items.map(item => {
//             return (
//              <Card key={item.id} item={item}/>
//             )
//           })
//         }
//       </div>
//   )}
// }

