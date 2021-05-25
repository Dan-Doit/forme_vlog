import Medical from './Pages/Medical/Medical'
import { Switch, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <header>
      </header>
      <Switch>
        <Route path="/" component={Medical} event />
        <Redirect path="*" component={Medical} />
      </Switch>
    </div>
  );
}

export default App;
