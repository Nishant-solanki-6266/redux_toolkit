import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'   // isme bhi provider us hoga jisse hmra sbhi component wrap hoge
import{store} from './app/store'         // store bhi hmne isiliye export kiya tha


ReactDOM.createRoot(document.getElementById('root')).render(
  // yha se hmne strict mode hata diya or provider le liya or (velue context api) ki jgh hum( store use krege )ab
  <Provider store={store}>                
    <App />
  </Provider>,
)
