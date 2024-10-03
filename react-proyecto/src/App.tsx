import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Admin, Resource } from 'react-admin';
import { useEffect, useReducer, useState, ReactNode, Fragment} from 'react';
import { dataProvider } from './dataProvider';
import { authProvider } from './Login/Authenticator';
import { Dashboard } from './dashboard';
import LoginPage from './Login/Login';
import RegisterPage from './Register';
import { i18nProvider } from './Polyglot';
import { MyLayout } from './design/dashboardLayout';
import { Companies } from './Companies';
import { Stats } from './Stats';
import Checkout from './Checkout';
import Contacts from './Contactos/Contacts';
import CreateContact from './Contactos/CreateContact';
import EditContact from './Contactos/EditContacts';
import ContactsIcon from '@mui/icons-material/Contacts';
import BusinessIcon from '@mui/icons-material/Business';
import InsightsIcon from '@mui/icons-material/Insights';
import SignUp from './SignUp';
import SignIn from './SignIn';
import DonatePage from './Donate';
import Topbar from './global/Topbar';
import Sidebar from './global/Sidebar';
import NotFound from './NotFound';
import Donadores from './Donadores';

const SET_PERMISSIONS = 'SET_PERMISSIONS';
const LOGOUT = 'LOGOUT';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebar] = useState(false);
  const authData = JSON.parse(localStorage.getItem('auth') || '{}');
  const auth = authData.tipo_usuario;
  console.log('User role:', auth);

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
                  <Route path="/" element={ <Dashboard />} />
                  {auth === 'admin' && (
                    <>
                      <Route path="/donate" element={<DonatePage />} />
                      <Route path="/donations" element={<Contacts/>} />
                    </>
                  )}
                  <Route path="/contacts" element={<Checkout />} />
                </Routes>
              </main>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

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
      return { ...state, permissions: null, authenticated: false };
    default:
      return state;
  }
};

export const App = () => {
  console.log('App component is mounting');
  const authData = localStorage.getItem('auth');
  const auth = authData ? JSON.parse(authData) : null;
  const [state, dispatch] = useReducer(permissionsReducer, {
    permissions: auth ? auth.tipo_usuario : null,
    authenticated: !!auth
  });

  useEffect(() => {
    const handleLoginSuccess = () => {
      const authData = localStorage.getItem('auth');
      console.log('Auth data found:', authData);
      const auth = authData ? JSON.parse(authData) : null;
      if (auth) {
        dispatch({ type: SET_PERMISSIONS, payload: auth.tipo_usuario });
      } else {
        console.error('No auth data found in localStorage');
      }
    };

    window.addEventListener('login-success', handleLoginSuccess);
    return () => {
      window.removeEventListener('login-success', handleLoginSuccess);
    };
  }, []);

  useEffect(() => {
    authProvider.checkAuth().then(() => {
      authProvider.getPermissions().then((permissions: string | null) => {
        console.log('Permissions found:', permissions);
        dispatch({ type: SET_PERMISSIONS, payload: permissions });
      }).catch(() => {
        console.log('No permissions found');
        dispatch({ type: LOGOUT, payload: null });
      });
    }).catch(() => {
      console.log('Not authenticated');
      dispatch({ type: LOGOUT, payload: null });
    });
  }, []);

  console.log('Rendering App with permissions: ', state.permissions);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={state.authenticated ? <Home />: <Navigate to="/login" />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>
    </Router>
  );
};
