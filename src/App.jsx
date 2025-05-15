import Body from "./Components/Body"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; 
import appStore from "./Utils/appStore";


function App(){
  return(
    <Provider store={appStore}>
    <BrowserRouter>
      <Body />
    </BrowserRouter>
    </Provider>
  );
};

export default App;