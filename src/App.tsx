import AuthProvider from "./contexts/auth";
import BreadcrumbProvider from "./contexts/breadcrumb";
import AppRouter from "./routers";

function App() {
  return (
    <AuthProvider>
      <BreadcrumbProvider>
        <AppRouter />
      </BreadcrumbProvider>
    </AuthProvider>
  )
}

export default App;
