import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route, HashRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: "1e32dfb24b9c4760bc5196ecf313ca76",
      progress: 10
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <HashRouter>
        <div style={{ backgroundColor: "#f3f3f3" }}>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route path='/' element={<News progress={this.setProgress} key={"general"} pageSize="6" category="general" api={this.state.api} />} />
            <Route path='/business' element={<News progress={this.setProgress} key={"business"} pageSize="6" category="business" api={this.state.api} />} />
            <Route path='/entertainment' element={<News progress={this.setProgress} key={"entertainment"} pageSize="6" category="entertainment" api={this.state.api} />} />
            <Route path='/health' element={<News progress={this.setProgress} key={"health"} pageSize="6" category="health" api={this.state.api} />} />
            <Route path='/science' element={<News progress={this.setProgress} key={"science"} pageSize="6" category="science" api={this.state.api} />} />
            <Route path='/sports' element={<News progress={this.setProgress} key={"sports"} pageSize="6" category="sports" api={this.state.api} />} />
            <Route path='/technology' element={<News progress={this.setProgress} key={"technology"} pageSize="6" category="technology" api={this.state.api} />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
