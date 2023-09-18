"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClientProvider() {
  return (
    <>
      <ToastContainer position="top-right" />
    </>
  );
}

export default ClientProvider;
