import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute
from "./routes/ProtectedRoute";
import Library from "./pages/Library";
import Events from "./pages/Events";
import Cafeteria from "./pages/Cafeteria";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>}
        />
            <Route
  path="/library"
  element={
    <ProtectedRoute>
      <Library />
    </ProtectedRoute>
  }
/>

<Route
  path="/events"
  element={
    <ProtectedRoute>
      <Events />
    </ProtectedRoute>
  }
/>

<Route
  path="/cafeteria"
  element={
    <ProtectedRoute>
      <Cafeteria />
    </ProtectedRoute>
  }
/>

<Route
  path="/resources"
  element={
    <ProtectedRoute>
      <Resources />
    </ProtectedRoute>
  }
/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;