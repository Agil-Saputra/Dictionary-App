// import all components
import Search from "./search";
import Bar from "./topBar/bar"

const header = () => {
  return (
    <div>
        <Bar />
        <Search />
    </div>
  )
}

export default header