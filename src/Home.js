import useFetch from './useFetch';
import BlogList from "./BlogList";

const Home = () => {
  // using the custom hook as useFetch, which internally has useEffect to fetch resource
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <h3>{ error }</h3> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;