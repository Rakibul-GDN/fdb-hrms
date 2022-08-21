import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async"

function App() {

    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
