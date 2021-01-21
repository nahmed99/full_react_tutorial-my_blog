import { useState } from 'react';

const Home = () => {

   // let nonReactivename = "Oi! Bhai Saab!"; // This variable is not REACTive! You need to put it into a useState for it to become REACTive!
   // const handleClick = () => {
   //    nonReactivename = "Ney Yaar";
   //    console.log(nonReactivename);
   // }

   const [reactiveName, setReactiveName] = useState("Oi! Bhai Saab!");
   const handleClick = () => {
      setReactiveName("Ney Yaar");
      console.log(reactiveName);
   }
   
   // const handleClick = (ev) => {
   //    console.log("Kidda Yaar?", ev);
   // }
   
   // const handleClickAgain = (name, ev) => {
   //    console.log("Kidda " + name, ev.target);
   // }



   return (
      <div className="home">
         <h2>Homepage</h2>

         {/* <p>{ nonReactivename }</p> */}
         <p>{ reactiveName }</p>

         {/* If the included the brackets after the function name below, it would be invoked automatically - without even waiting for the user to click it. Therefore we only provide a reference to the function name */}
         <button onClick={ handleClick }>Click It!</button>
         
         {/* <button onClick={ (event) => {
            handleClickAgain('Yaara', event) // This is the way to pass arguments to a called function from here (and to prevent it being invoked automatically). "event" can be passed into this function as a the first OR the second argument
         } }>Click It Again!</button> */}

      </div>
   );
}

export default Home;