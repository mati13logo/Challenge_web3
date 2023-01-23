import React from 'react'
import './App.css'
import Web3 from 'web3'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar/navbar'
import Form from './components/form/form.jsx'
import NftComponent from './components/NftComponent'
import { useReducer } from 'react';
import { reducer } from './redux/reducer'
import {Reset} from './redux/actions.js'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [isConnected, setIsConnected] = useState(false)
  const [ethBalance, setEthBalance] = useState('')
  const detectCurrentProvider = () => {

    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (windows.web3) {
      provider = windows.web3.currentProvider;
    } else {
      console.log('no hay conexion')
    }
    return provider;
  }

  const onConnect = async () => {

    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(currentProvider)
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account)
        setIsConnected(true);
        setEthBalance(ethBalance);
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onDisconnect = () => {
    setIsConnected(false)
    dispatch(Reset())
  }

  return (
    
      <>
        <Navbar isConnected={isConnected} onConnect={onConnect} onDisconnect={onDisconnect} />
        <div className="container">
          {
            isConnected && (
              <> 
              <div className='container_form'>
                <h1>Crea tu NFT</h1>
                <Form />
              </div>
              <div className='container_nft'>
                <h1>Tus NFT'S</h1>
                <NftComponent />
              </div>
              </>
            )
          }
          {
            !isConnected && (
              <>
                <h1>Por favor registrese</h1>
              </>
            )
          }
        </div>
      </>

  )
}

export default App
