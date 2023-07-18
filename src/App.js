import logo from './logo.svg';
import { GoogleLogin } from '@react-oauth/google';
import './App.css';

function App() {
  return (
    <div className="App">
           <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            theme="outline"
            shape="circle"
          
            onError={() => {
              console.log('Login Failed');
            }} useOneTap
          
          />
    </div>
  );
}

export default App;
