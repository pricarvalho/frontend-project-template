import { useKeycloak } from "@react-keycloak/web";


const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  if (isLoggedIn) {
    return children;
  }
  
  return <div>
    <h1>Você precisa logar primeiro!</h1>
  </div>;
};

export default PrivateRoute;
