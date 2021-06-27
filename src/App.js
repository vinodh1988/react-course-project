import React, {createRef}  from 'react'
import './App.css';
import {Second as Box} from './Components/Second'

export class App extends React.Component
{
   constructor(){
     super();
     this.state= {
             apptitle: "My App ABC",
             titles:["Equipment","Coding Languages","Tools","Databases"],
             items :[
               ["Hard Disk","RAM","Keyboard"],
               ["Java","C#","PHP"],
               ["Eclipse","IntelliJ","VSCode"],
               ["Oracle Server","DB2"]
             ]
      }
      this.storeItem =this.storeItem.bind(this);
      this.type = createRef();
      this.item = createRef();
   }
 //Hooks
   storeItem(){
           let type= this.type.current.value;
           let item = this.item.current.value;
           this.state.items[type].push(item)
         
           this.setState(this.state);
        setTimeout(()=>this.setState({dummy:"Funny"}),10000)
        //setTimeout(function(){this.setState({dummy:"Funny"})}.bind(this),5000)
   }
   render(){
     console.log(this.state)
     
         return(
           <div>
             <h1> {this.state.apptitle} </h1>
             
             <table>
                 <tr>
                   <th>Type</th>
                   <td> <select ref={this.type}>
                        {this.state.titles.map((x,y)=><option key={y} value={y}>{x}</option>)}
                   </select>
                   </td>
                 </tr>
                 <tr>
                   <th>Item</th>
                   <td> 
                     <input type="text" ref={this.item}/>
                   </td>
                 </tr>
                  <tr>
                    <td><button onClick={this.storeItem}>Add Item</button></td>
                  </tr>
             </table>
            {this.state.titles.map(
              (x,y) => <Box key={y} title={x} things={this.state.items[y]}></Box>
            )}
           </div>

         ); 

   }
}
export default App;

/*

      <Box title={this.state.titles[0]} things={this.state.items[0]}></Box>
             <Box title={this.state.titles[1]} things={this.state.items[1]}></Box>
             <Box title={this.state.titles[2]} things={this.state.items[2]}></Box>
             <Box title={this.state.titles[3]} things={this.state.items[3]}></Box>

*/