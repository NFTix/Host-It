import { Suspense, lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { configureWeb3Modal } from "./connection";
import { Toaster } from "react-hot-toast";
import useGetENSByAddress from "./Functions/useGetEnsByAddress";
// const  MintPOAP = lazy(()=> import("./pages/dashboard/mint-poap/MintPOAP"));
const LandingPage = lazy(() => import("./pages/landing-page"));
const CreateEvent = lazy(() => import("./pages/dashboard/create-events/create-event"));
const AllEvents = lazy(() => import("./pages/dashboard/explore-all-events/all-events"));
const AllEventDetail = lazy(() => import("./pages/dashboard/explore-all-events/all-event-detail"));
const ManageEvents = lazy(() => import("./pages/dashboard/manage-events/manage-events"));
const ManageEventDetails = lazy(() => import("./pages/dashboard/manage-events/manage-event-details"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const Events = lazy(() => import("./pages/events"));
const MyTickets = lazy(() => import("./pages/dashboard/my-tickets/my-tickets"));
const Preloader = lazy(() => import("./components/PreLoader"));
const Registration = lazy(() => import("./pages/registration"))

function App() {
  configureWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const { loading, data } = useGetENSByAddress()
  return (
    <>
      <ChakraProvider>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={isConnected ? (data && data[3] === true ? <Navigate to="/dashboard" /> : <Navigate to="/ens-registration" />) : <LandingPage />} />
            <Route path="/events" element={isConnected ? (data && data[3] === true ? <Navigate to="/dashboard" /> : <Navigate to="/ens-registration" />) : <Events />} />
            <Route path="/dashboard" element={isConnected ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/create-event" element={isConnected ? <CreateEvent /> : <Navigate to="/" />} />
            <Route path="/all-events" element={isConnected ? <AllEvents /> : <Navigate to="/" />} />
            <Route path="/all-events/:id" element={isConnected ? <AllEventDetail /> : <Navigate to="/" />} />
            <Route path="/manage-events" element={isConnected ? <ManageEvents /> : <Navigate to="/" />} />
            <Route path="/manage-events/:id" element={isConnected ? <ManageEventDetails /> : <Navigate to="/" />} />
            <Route path="/tickets-poap" element={isConnected ? <MyTickets /> : <Navigate to="/" />} />
            <Route path="/ens-registration" element={isConnected ? (data && data[3] === true ? <Navigate to="/dashboard" /> : <Registration/>) : <LandingPage />} />
          </Routes>
          <Toaster />
        </Suspense>
      </ChakraProvider>
    </>
  );
}

export default App;
