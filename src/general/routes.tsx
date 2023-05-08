import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

const Login = lazy(() => import("../components/login/Login"));
const PageNotFound = lazy(() => import("../components/global/PageNotFound"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const Buttons = lazy(() => import("../components/Buttons"));
const FormItems = lazy(() => import("../components/FormItems"));
const CheckBoxesRadios = lazy(() => import("../components/CheckBoxesRadios"));
const FormValidation = lazy(() => import("../components/FormValidation"));
const Avatars = lazy(() => import("../components/Avatars"));
const Badges = lazy(() => import("../components/Badges"));
const Boxes = lazy(() => import("../components/Boxes"));
const Dialogs = lazy(() => import("../components/Dialogs"));
const Texts = lazy(() => import("../components/Texts"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="pre-loading">Loading...</div>}>
      <Routes>

        <Route exact path='/login' element={<Login />} />

        <Route path='*' element={<Navigate to='/app/404' />} />
        <Route path='/' element={<Navigate to='/app/dashboard' />} />
        <Route path='/app' element={<Navigate to='/app/dashboard' />} />

        <Route path='/app' element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="formItems" element={<FormItems />} />
          <Route path="checkBoxesRadios" element={<CheckBoxesRadios />} />
          <Route path="formValidation" element={<FormValidation />} />
          <Route path="avatars" element={<Avatars />} />
          <Route path="badges" element={<Badges />} />
          <Route path="boxes" element={<Boxes />} />
          <Route path="dialogs" element={<Dialogs />} />
          <Route path="texts" element={<Texts />} />

          <Route path="404" element={<PageNotFound />} />
        </Route>

      </Routes>
    </Suspense>
  )
}
export default AppRoutes; 