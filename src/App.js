import Maincomponent from './components/Maincomponent';
import Errorboundry from './components/ErorrBoundry/Errorboundry';

const App = () =>{
  return (
    <div>
      <Errorboundry>
          <Maincomponent/>
       </Errorboundry>
    </div>
  );
}

export default App;
