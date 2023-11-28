import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/home/home"

const Routes1 = () =>{


return(
<BrowserRouter>
<Routes>

<Route element = {<Home/>} path="/" exact/>


</Routes>

</BrowserRouter>





)




}
export default Routes1