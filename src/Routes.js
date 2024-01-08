import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/home/home"

const Routes1 = () =>{


return(
<HashRouter>
<Routes>

<Route element = {<Home/>} path="/" exact/>


</Routes>

</HashRouter>





)




}
export default Routes1