import Sidebar from "./Sidebar.jsx"
import './home.css'
import Feed from "./feed.jsx"

function Home({ sidebar, category, setCategory }) {
    return (
            <div className="home">
                <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
                <Feed sidebar={sidebar} category={category}/>
            </div>
    )
}
export default Home