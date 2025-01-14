// App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect, useReducer } from 'react';
import { authProvider } from '../Login/Authenticator';
import { Dashboard } from '../dashboard';
import LoginPage from '../Login/Login';
import RegisterPage from '../Login/Register';
import Companies from './Companies';
import { Stats } from '../admin/Stats';
import Contacts from '../Contactos/Contacts';
import CreateContact from '../Contactos/CreateContact';
import EditContact from '../Contactos/EditContacts';
import Donadores from '../Donaciones/Donations';
import Registrocola from '../Login/UserRegister';
import DonatePage from '../Donate';
import Topbar from '../global/Topbar';
import Sidebar from '../global/Sidebar';
import AuthRequired from '../Login/Load';
import Cookies from 'js-cookie';
import PaymentForm from './PaymentForm';
import AdminDashboard from '../admin/AdminDashboard';
import ColabDashboard from '../Colaboradores/ColabDashboard';
import EditCompany from './EditCompany';
//import Registerocolab from './UserRegister';

const SET_PERMISSIONS = 'SET_PERMISSIONS';
const LOGOUT = 'LOGOUT';

interface State {
  permissions: string | null;
  authenticated: boolean;
}

interface Action {
  type: string;
  payload: string | null;
}

const permissionsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_PERMISSIONS:
      return { ...state, permissions: action.payload, authenticated: !!action.payload };
    case LOGOUT:
      authProvider.logout(); // Corrección: Invocar la función logout
      return { ...state, permissions: null, authenticated: false };
    default:
      return state;
  }
};

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebar] = useState(false);
  const userData = Cookies.get('user_role');
  const auth = userData ? JSON.parse(userData).role : null;
  //console.log('User role:', auth);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Topbar setIsSidebar={setIsSidebar} />
              <main className="flex-1 overflow-y-auto p-4 bg-gray-600">
                <Routes>
                  <Route
                    index
                    element={
                      auth === 'admin' ? (
                        <Navigate to="/AdminDashboard" replace />
                      ) : auth === 'colaborador' ? (
                        <Navigate to="/ColabDashboard" replace />
                      ) : (
                        <Dashboard />
                      )
                    }
                  />
                  <Route path="/donations" element={<Contacts />} />
                  <Route path="/checkout" element={<PaymentForm />} />
                  {auth === 'admin' && (
                    <>
                      <Route path="/AdminDashboard" element={<AdminDashboard />} />
                      <Route path="/register-colab" element={<Registrocola />} />
                      <Route path="/stats" element={<Stats />} />
                      <Route path="/companies" element={<Companies />} />
                      <Route path="/companies/edit/:id" element={<EditCompany />} />
                      <Route path="/donadores" element={<Donadores />} />
                      <Route path="/contacts" element={<Contacts />} />
                      <Route path="/create-contact" element={<CreateContact />} />
                      <Route path="/edit-contact/:id" element={<EditContact />} />
                    </>
                  )}

                  {auth === 'colaborador' && (
                    <>
                      <Route path="/ColabDashboard" element={<ColabDashboard />} />
                      <Route path="/contacts" element={<Contacts />} />
                      <Route path="/stats" element={<Stats />} />
                      <Route path="/companies" element={<Companies />} />
                      <Route path="/companies/edit/:id" element={<EditCompany />} />
                      <Route path="/create-contact" element={<CreateContact />} />
                      <Route path="/edit-contact/:id" element={<EditContact />} />
                      <Route path="/donadores" element={<Donadores />} />
                    </>
                  )}

                  {auth === 'donador' && (
                    <>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/donate" element={<DonatePage />} />
                    </>
                  )}
                </Routes>
              </main>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export const App = () => {
  const [state, dispatch] = useReducer(permissionsReducer, {
    permissions: Cookies.get('user_role') || null,
    authenticated: !!Cookies.get('user_role'),
  });

  // Manejar la autenticación en el momento del login o al cargar la página
  useEffect(() => {
    const handleAuthentication = () => {
      const userData = Cookies.get('user_role');
      if (userData) {
        console.log('User role found in cookie:', userData);
        dispatch({ type: SET_PERMISSIONS, payload: userData });
      } else if (state.authenticated) {
        console.log('No user role found, triggering logout');
        dispatch({ type: LOGOUT, payload: null });
      }
    };

    window.addEventListener('login-success', handleAuthentication);
    window.addEventListener('logout', handleAuthentication); // Opcional: Manejar evento de logout

    return () => {
      window.removeEventListener('login-success', handleAuthentication);
      window.removeEventListener('logout', handleAuthentication); // Opcional
    };
  }, [state.authenticated]);

  console.log('Rendering App', { authenticated: state.authenticated, permissions: state.permissions });

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/*"
          element={
            <AuthRequired>
              <Home />
            </AuthRequired>
          }
        />
      </Routes>
    </Router>
  );
};
