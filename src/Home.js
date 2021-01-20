const Home = () => {

   const handleClick = () => {
      console.log("Kidda Yaar?");
   }

   const handleClickAgain = (name) => {
      console.log("Kidda " + name);
   }


   return (
      <div className="home">
         <h2>Homepage</h2>
         {/* If the included the brackets after the function name below, it would be invoked automatically - without even waiting for the user to click it. Therefore we only provide a reference to the function name */}
         <button onClick={ handleClick }>Click It!</button>
         <button onClick={ () => {
            handleClickAgain('Yaar') // This is the way to pass arguments to a called function from here (and to prevent it being invoked automatically)
         } }>Click It Again!</button>
      </div>
   );
}

export default Home;