import './App.css';
import React, { useState } from 'react';
import { Alerts, AlertProvider, useAlert } from "next-alert";

function formatRupiah(angka) {
  const number = Number(angka);
  if (isNaN(number)) return 'Rp0,-';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number).replace(/\s/g, '') + ',-';
}

function AppContent() {
  const { addAlert } = useAlert();

  const [items, setItems] = useState([
    { id: 1, item: 'Meja billiard jkw', harga: '0', desc: 'ini hanya tes' },
    { id: 2, item: 'FlashDisk Sahroni', harga: '5000000', desc: 'rare item' },
    { id: 3, item: 'Asbak BALI Sahroni', harga: '10000000', desc: 'asli bali, lentur" gitu loh ya' }
  ]);
  
  const [currentInput, setCurrentInput] = useState({
    item: '',
    harga: '',
    desc: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentInput({
      ...currentInput,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    if (currentInput.item && currentInput.harga && currentInput.desc) {
      const newItem = { 
        id: new Date().getTime(),
        ...currentInput 
      };
      setItems([...items, newItem]);
      setCurrentInput({ item: '', harga: '', desc: '' });
      addAlert("Alhamdulillah", "Nah ngunu pinter", "success");
    } else {
      addAlert("Matamu Cok!", "iku ono sing kosong, picek a", "error");
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + Number(item.harga), 0);
  };

  return (
    <div className='app-container'>
      <Alerts position="top-right"
              className="alert-setting" 
      />

      <h1 className='judul'>Penugasan Day 2 UKM SoftDev</h1>
      
      <div className="input-section">
        <input 
          type='text'
          placeholder='Nama barang....'
          name='item'
          value={currentInput.item}
          onChange={handleInputChange}
          className="input-full"
        />
        <input 
          type='number'
          placeholder='Harga barang....'
          name='harga'
          value={currentInput.harga}
          onChange={handleInputChange}
          className="input-full"
        />
        <div className="input-row">
          <input 
            type='text'
            placeholder='Deskrip barang....'
            name='desc'
            value={currentInput.desc}
            onChange={handleInputChange}
            className="input-partial"
          />
          <button onClick={handleAddItem}>+Tambahkan</button>
        </div>
      </div>
      
      <div className="items-list">
        {items.map((singleItem, index) => (
          <div key={singleItem.id} className="list-item">
            <span className="item-number">{index + 1}</span>
            <div className="item-details">
              <span className="item-name">{singleItem.item}</span>
              <span className="item-desc">{singleItem.desc}</span>
            </div>
            <span className="item-price">{formatRupiah(singleItem.harga)}</span>
          </div>
        ))}
      </div>
      
      <div className="total-container">
        Total: {formatRupiah(calculateTotal())}
      </div>
    </div>
  );
}

function App() {
  return (
    <AlertProvider>
      <AppContent />
    </AlertProvider>
  );
}

export default App;