import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter}from 'react-router-dom';
import App from './App';
import './index.css';
import { GamesProvider}from './context/GamesContext';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state={ hasError: false,error:null,info: null };
  }
  static getDerivedStateFromError(error){
    return{hasError: true, error };
  }
  componentDidCatch(error, info){
    this.setState({ info });
    console.error("ErrorBoundary caught an error",error,info);
  }
  render(){
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem',background: '#fee2e2',color:'#991b1b', minHeight: '100vh',fontFamily:'sans-serif' }}>
          <h1 style={{ fontSize:'2rem',marginBottom:'1rem', fontWeight:'bold' }}>Случилась ошибка:</h1>
          <p style={{ fontSize:'1.25rem',marginBottom:'1rem' }}>Пожалуйста,скопируйте текст ниже и отправьте его мне:</p>
          <pre style={{ background:'#fef2f2',padding: '1rem',borderRadius:'0.5rem',overflowX:'auto' }}>
            {this.state.error && this.state.error.toString()}
            {'\n'}
            {this.state.info && this.state.info.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BrowserRouter>
      <GamesProvider>
        <App/>
      </GamesProvider>
    </BrowserRouter>
  </ErrorBoundary>
);