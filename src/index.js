import ReactDOM from "react-dom";

import { AuthProvider } from "./providers/Auth.js";
import App from "./components/App.js";
import "./assets/styles/reset.css";
import "./assets/styles/styles.css";

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.querySelector(".root")
);
