import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [author, setAuthor] = useState('Mark');

    // default to false, as we will update only when the add action is triggered
    const [isLoading, setIsLoading] = useState(false)
    // useHistory to create the history object, so as to route between pages
    const history = useHistory();


    function handleSubmit(e) {
        e.preventDefault();
        // Construct new blog object using the state variables to gather latest values
        const blog = { title, details, author }

        setIsLoading(true); // set the state as true, as submint is clicked

        // call to post new blog to the JSON data file by making POST call
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false); // reset, since the call is complete
            console.log("New Blog Added");
            // redirecting the user to home page, by using the route as backslash
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Blog Title:
                </label>
                <input
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>
                    Blog Body:
                </label>
                <textarea
                    type="text"
                    value={details}
                    required
                    onChange={(e) => setDetails(e.target.value)}
                />
                <label>
                    Blog Author:
                </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mark">Mark</option>
                    <option value="Jacob">Jacob</option>
                </select>
                {!isLoading && (<button>Add Blog</button>)}
                {isLoading && (<button>Adding Blog...</button>)}
            </form>
        </div>
    );
}

export default Create;