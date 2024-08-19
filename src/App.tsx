import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CinemaPage from "./pages/Cinema.page";
import FilmPage from "./pages/Film.page";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import films from './info/films.json'
import PicturesPage from "./pages/Pictures.page";
import BeautyPage from "./pages/Beauty.page";
import ProfilePage from "./pages/Profile.page";

function App() {

    const item = useTypedSelector(state => state.items)

    const {setItems} = useActions()
    setItems({items: films})

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cinema" element={<CinemaPage />} />
                    <Route path="/cinema/:id" element={<FilmPage item={item.item}/>} />
                    <Route path="/pictures" element={<PicturesPage />} />
                    <Route path="/beauty" element={<BeautyPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
