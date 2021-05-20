import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import logo from './logo.png';
import './App.css';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}


<p className="cp-text">
    © Copyright 2021 <a href="https://github.com/rj-robinjoseph" target="_blank" style={{textDecoration: 'none'}} >Robin Joseph</a>. All rights reserved.
</p>
    </div>
  );
}

export default App;