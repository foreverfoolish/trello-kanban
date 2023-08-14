
import * as Styles from "./App.Styles"

import Dashboard from "./Components/Dashboard";
import MainHeader from "./Components/MainHeader";
import SideDrawer from "./Components/SideDrawer";
const App = () => {
  return(
    <Styles.Container>
      <Styles.SideDrawerSection>
        <SideDrawer />
      </Styles.SideDrawerSection>
      <Styles.MainContentSection>
        <MainHeader />
        <Dashboard />
      </Styles.MainContentSection>
    </Styles.Container>
  ) 
}

export default App;
