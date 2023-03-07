import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signin, Forgot, Signup } from './pages';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin />}></Route>
                <Route path='/forgot' element={<Forgot />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    );
}