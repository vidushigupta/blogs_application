import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();

    // Create a history object to redirect to listing page, as the blog is deleted
    const history = useHistory();

    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    function handleClick(e) {

        // call to server to delete the particular blog as user clicks the delete button
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Delete done");
            // Reroute to home page
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading.. </div>}
            {error && <h3>{error}</h3>}
            {blog && (
                <div className="details" >
                    <article>
                        <h2>{blog.title}</h2>
                        <p>{blog.details}</p>
                        <p>
                            Written by: {blog.author}
                        </p>
                        <button onClick={(e) => handleClick(e)}>Delete Blog</button>
                    </article>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;