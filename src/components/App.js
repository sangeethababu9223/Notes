import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./common/loader/loader";
import Navigation from "./common/navigation/navigation";
const AddNote = lazy(() => import("./notes/addNote/addNote"));
const ListNote = lazy(() => import("./notes/listNote/listNote"));

const App = () => {
  return (
    <div className='app-wrapper'>
      <h1>This is a wraper, more will follow.</h1>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path='/' element={<ListNote />} />
          <Route path='/add-note' element={<AddNote />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
