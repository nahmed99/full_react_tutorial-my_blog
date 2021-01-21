import { useState } from 'react';

const Home = () => {

   const [blogs, setBlogs] = useState([
      { title: "My new website", body: "Kidda Yaara?", author: "Bhai Saab", id: 1 },
      { title: "Welcome...", body: "Kidda Yaara?", author: "Uncle Jee", id: 2 },
      { title: "Some Top Tips", body: "Kidda Yaara?", author: "Mama", id: 3 }
   ]);

   return (
      <div className="home">
         { blogs.map((blog) => {
            return (
               <div className="blog-preview" key={ blog.id }>
                  <h2>{ blog.title }</h2>
                  <p>Written by { blog.author }</p>
               </div>
            )
         })}
      </div>
   );
}

export default Home;