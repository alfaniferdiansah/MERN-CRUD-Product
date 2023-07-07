import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import './index.scss';

const Tambah = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [nama, setNama] = useState("")
  const [harga, setHarga] = useState("")
  const [stock, setStock] = useState("")
  const navigate = useNavigate()

  const saveProduct = async(e) => {
    e.preventDefault()

    const errors = {};

      if (!nama) {
        errors.nama = ['Name is required'];
      }

      if (!harga) {
        errors.harga = ['Price is required'];
      }

      if (!stock) {
        errors.stock = ['Stock is required'];
      }

      if (!isChecked) {
        setErrors({ isChecked: ['Data invalid cannot add'] });
        return;
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
        console.log('Form submitted');
      }
    try {
      await axios.post("http://localhost:3010/products", {
        nama,
        harga,
        stock
      })
      navigate("/")
    }catch(error) {
      console.log(error);
    }
  }
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={saveProduct}>
          <Input name="name" type="text" value={nama} onChange={(e) => setNama(e.target.value)} error={errors.nama} placeholder="Nama Produk..." label="Nama"/>
          <Input name="price" type="number" value={harga} onChange={(e) => setHarga(e.target.value)} error={errors.harga} placeholder="Harga Produk..." label="Harga"/>
          <Input name="Stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} error={errors.stock} placeholder="Stock Produk..." label="Stock"/>
          <Input name="status" type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} label="Active"/>
          {errors.isChecked && (
            <div className="error">{errors.isChecked[0]}</div>
          )}
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;