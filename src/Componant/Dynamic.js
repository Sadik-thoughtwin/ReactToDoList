import { BrowserRouter as Router,Link ,} from "react-router-dom";
// import {withRouter} from 'react-router-dom';

let users= [
  {name:"sadik",id:1,email:"sadik@gmail.com"},
  {name:"sourbh",id:2,email:"sourabh@gmail.com"},
  {name:"asim",id:3,email:"asim@gmail.com"},
  {name:"ajay",id:4,email:"ajay@gmail.com"},
  {name:"sameer",id:5,email:"sameer@gmail.com"}
]

function Dynamic(prop) {
  console.log(prop)
  return <div><Router>  
    {
      users.map((a,b)=>{
        return <div key={b}><Link to={"/user/"+a.id}><h2 >{a.name}</h2></Link></div>
        })
    }
  </Router>
    
  </div>;

}
export default Dynamic
