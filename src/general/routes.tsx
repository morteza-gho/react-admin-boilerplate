import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";

const Login = lazy(() => import("../components/login/Login"));
const PageNotFound = lazy(() => import("../components/global/PageNotFound"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const Buttons = lazy(() => import("../components/Buttons"));
const FormItems = lazy(() => import("../components/FormItems"));

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

          <Route path="404" element={<PageNotFound />} />
        </Route>

      </Routes>
    </Suspense>
  )
}
export default AppRoutes; 