import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Body from "./Component/Body";
import CommentList from "./Component/CommentList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./../src/Component/WatchPage"

//Routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      { path: "watch", element: <WatchPage /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <Header></Header>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
