import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8180",
 realm: "my-app",
 clientId: "frontend-project-template"
});

export default keycloak;