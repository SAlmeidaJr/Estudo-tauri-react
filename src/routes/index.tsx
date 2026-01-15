import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Exams from "@/pages/Exams";
import Home from "@/pages/Home";
import AI from "@/pages/AI";
import Notes from "@/pages/Notes";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/exams", element: <Exams /> },
      { path: "/ai", element: <AI /> },
      { path: "/notes", element: <Notes /> },
    ],
  },
]);
