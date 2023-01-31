import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import VideoPage from "../watch/VideoPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/watch",
    element: <VideoPage />,
  },
]);
