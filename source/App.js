import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Layout from './components/Layout';
import Home from '../pages/Home';

const App = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
        </Route>
    </Routes>
)

export default App;