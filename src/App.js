/*import PropsExample from './PropsExample'
import FuncPropExample from './FuncPropExample'
import StateExample from './StateExample'
import Events from './Events'*/
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
function Demo(){
  return(
    <div>
          <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
          </BrowserRouter>      
          {/*<Events/>
          <PropsExample framework="AngularJS" year="2008"/>
				<PropsExample framework="ReactJS" year="2013"/>
				<PropsExample framework="VueJS" year="2016"/>
				<FuncPropExample framework="react" number="2"
        */}
        {/*<FuncPropExample framework="react" number="1"/>*/}
        {/*<StateExample/>*/}
    </div>

    )
}
export default Demo;
