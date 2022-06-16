import React from 'react'
import PreNavbar from './Components/MajorComponents/Pre Navbar/preNavbar'
import Navbar from './Components/MajorComponents/Navbar/navbar'
import JhirkiPrints from './Components/Pages/JHIRKIBLOCKPRINTS/prints'
import Formals from './Components/Pages/FORMALS/formal'
import Wedding from './Components/Pages/WeddingFestival/wedding'
import Bridals from './Components/Pages/Bridals/bridals'
import Wardha from './Components/Pages/WardhaSaleemBrides/brides'
import Porter from './Components/Pages/Portal/portal'
import Arrivals from './Components/Pages/Arrivals/arrival'
import Footer from './Components/MajorComponents/Footer/footer'
import Home from './Components/Pages/Home/home'
import Luxe from './Components/Pages/LuxeEdition/luxe'
import Festive from './Components/Pages/FestiveEdition/festive'
import Collection from './Components/Pages/Collection/collection'
import Luxe2 from './Components/Pages/LuxeEdition2/luxe2'
import { Route } from 'react-router-dom'
import DetailPage from './Components/Pages/DetailPage/detailPage'

function Routing() {
    return (
        <div>
            <PreNavbar/>
            <Navbar/>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/prints'>
                <JhirkiPrints />
            </Route>
            <Route path='/formal'>
                <Formals />
            </Route>
            <Route path='/wedding'>
                <Wedding />
            </Route>
            <Route path='/bridal'>
                <Bridals />
            </Route>
            <Route path='/wardha'>
                <Wardha />
            </Route>
            <Route path='/porter'>
                <Porter />
            </Route>
            <Route path='/arrival'>
                <Arrivals />
            </Route>
            <Route path='/luxeEdition'>
                <Luxe />
            </Route>
            <Route path='/luxe'>
                <Luxe2 />
            </Route>
            <Route path='/festiveEdition'>
                <Festive />
            </Route>
            <Route path='/collection'>
                <Collection />
            </Route>
            <Route path="/detailpage">
                <DetailPage/>
            </Route>
            <Footer/>
        </div>
    )
}

export default Routing
