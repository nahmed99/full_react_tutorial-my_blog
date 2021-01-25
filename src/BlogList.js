// using props:
// const BlogList = (kiddas) => {
//    const blogs = kiddas.blogs
//    const title = kiddas.title

// Destructuring, i.e., NOT using props - using {} instead for the destructured data
const BlogList = ({ blogs, title }) => {


   return ( 
      <div className="blog-list">
         <h2>{ title }</h2>
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
 
export default BlogList;