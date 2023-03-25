import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Users from "./Users";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="users" element={<Users/>}/>
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>

    );
}

export default App;
