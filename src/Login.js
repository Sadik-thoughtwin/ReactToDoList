    import React ,{useState} from 'react';

      function Login() {
        const [user,setUser] = useState("")
        const [password,setPassword] = useState("")
        const [useError,setUseError] = useState(false)
        const [passError,setPassError] =useState(false)

      function Pagehandler(e){
    //  let item =  e.target.value;
    //  console.log(item)
         if(user.length<3 || password.length<3)
        {
          alert("enter invalid  data")
        }
        // else if(user.length<3 || password.length<3 ){
        //   alert("Invalid user & password")
        // }
       
        else{
          alert("all right ")
        }
        e.preventDefault();
        console.warn("hello")
       
      }

      function userHandler(e){
        
        let item= e.target.value;
        
        console.log(item)
        if(item.length<3 ){
          setUseError(true)
          console.log("Invalid user name")
        }else {
          setUseError(false)
        } 
        setUser(item)
      }
      function passwordHandler(e){
      let item = e.target.value;
      console.log(item)
        if(item.length<3){
          setPassError(true)
          console.log("Invalid name")
        } else {
          setPassError(false)
        }
        setPassword(item)
      }
      
        return (
          <>
          <form onSubmit={Pagehandler}>
            <h2>Login page </h2>
            <input type='text' placeholder="Enter user name" onChange={userHandler}/>{useError?<span>User not valid</span>:""}
            <br /><br />
            <input type='password' placeholder="Enter user password" onChange={passwordHandler}/>{passError?<span>Invalid pass</span>:""}
            <br /><br />
            <button type="submit">Submit</button>
            </form>
        </>
      
        )
    }
          
    export default  Login;
        