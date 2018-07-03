import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default class Timeline extends Component {
 constructor(props) {
   super(props);
   this.timeHop = this.timeHop.bind(this);
 }

 timeHop(position) {
   if (!document.querySelector('.timeline')) return null;
   document.querySelector('.timeline').scrollLeft = position;
 }

 render() {
   return <div>
       <div className='timeline' id='timeline'>
         <div className='hline' />
         {this.props.events}
       </div>
       <div className='buttons'>
         <form action="#timeline">
           <button className='timebutton' className='timebutton' onClick={() => this.timeHop(0)}>
             Foundation of Rome
           </button>
           </form>
           <form action="#timeline">
           <button className='timebutton' onClick={() => this.timeHop(5958)}>
             The Laws of the Twelve Tables
           </button>
         </form>
         <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(32020)}>
             Hannibal invades Italy
           </button>
         </form>
         <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(53512)}>
             Julius Caesar was assassinated
           </button>
         </form>
         <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(54480)}>
             Roman Empire began
           </button>
         </form>
         <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(58500)}>
             Augustus ended pontifex maximus
           </button>
         </form>
         <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(88500)}>
             Constantine becomes Emperor
           </button>
         </form>
           <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(95120)}>
             Conversion to Christianity
           </button>
         </form>
         <button className='timebutton' onClick={() => this.timeHop(95142.5)}>
             Rome splits
           </button>
           <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(95701.25)}>
             The Visigoths sack Rome
           </button>
         </form>
         <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(98662.5)}>
             End of the Western Roman Empire and the fall of Ancient
             Rome
           </button>
         </form>
         <form action="#timeline">
         <button className='timebutton' onClick={() => this.timeHop(104363.75)}>
             The Byzantine Empire ends
         </button>
       </form>
     </div>
       <div className='historical_outline'>
       </div>
     </div>;
 }
}
