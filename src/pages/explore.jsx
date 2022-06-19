
import { useState } from 'react';
import NftCard from '../components/Nftcard';
import {fetchNFTs} from '../utils/fetchNFTs';

const Explore = () => {

    const [owner, setOwner] = useState("")
    const [contractAddress, setContractAddress] = useState("")
    const [NFTs, setNFTs] = useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        comments: "",
        favIcon: "",
        filter: ""
    })
    const [allMemes, setAllMemes] = useState([])

    function handleMemeChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <div>
            <header className="Explore-background">
                <div className='flex-grow flex justify-end mr-12 mb-12'>
                </div>
                <div className="Explore-textdisplay">
                    <div className="Explore-text">
                         
                            <fieldset className="fieldset">
                                <legend className="legend">Select Filter</legend>
                                <input
                                    type="radio"
                                    id="filterA"
                                    name="filter"
                                    value="filterA"
                                    checked={meme.filter === "filterA"}
                                    onChange={handleMemeChange}
                                    
                                />
                                <label htmlFor="filterA" className="label">Filter A</label>
                                <br />
                                
                                <input 
                                    type="radio"
                                    id="filterB"
                                    name="filter"
                                    value="filterB"
                                    checked={meme.filter === "filterB"}
                                    onChange={handleMemeChange}
                                
                                />
                                <label htmlFor="filterB" className="label">Filter B</label>
                                <br />
                                
                                <input 
                                    type="radio"
                                    id="filterC"
                                    name="filter"
                                    value="filterC"
                                    checked={meme.filter === "filterC"}
                                    onChange={handleMemeChange}
                                    
                                />
                                <label htmlFor="filterC" className="label">Filter C</label>
                                <br />
                            </fieldset>
                                   
                    </div>
                    <div className="Explore-inputdiv">
                        <input className="Explore-input" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
                        <input className="Explore-input" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT Contract address (optional)'></input>
                    </div>
                    <div className="Explore-buttondiv">
                    <button className="Explore-search" onClick={() => {fetchNFTs(owner, contractAddress, setNFTs    )}}>Search For NFTs</button>
                    </div>
                </div>
            </header>

            <section className="Explore-nft">
                {
                    NFTs ? NFTs.map(NFT => {
                       
                        return (
                           <NftCard image={NFT.media[0].gateway} id={NFT.id.tokenId } title={NFT.title} address={NFT.contract.address} description={NFT.description} attributes={NFT.metadata.attributes} ></NftCard>
                        )
                    }) : <div>No NFTs found</div>
                }
                <p className="Nftcard-filter">{meme.filter}</p>
            </section>
        </div>
    )
}


export default Explore

/*
  <div className="Explore-inputdiv">
<input className="Explore-input" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
<input className="Explore-input" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT Contract address (optional)'></input>
</div>
<div className="Explore-buttondiv">
<button className="Explore-search" onClick={() => {fetchNFTs(owner, contractAddress, setNFTs    )}}>Search</button>
</div> 

React Meme Project

import React from "react"
import memesData from './memesData.js'
import Butterfly from "./Butterfly.png"


export default function Form() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        comments: "",
        favIcon: "",
        filter: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function retrieveNFT() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = (allMemes[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
        )}   
    
    return (
        <main>
            <div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="legend">Select Filter</legend>
                        <input
                            type="radio"
                            id="filterA"
                            name="filter"
                            value={Butterfly}
                            checked={meme.filter === {Butterfly}}
                            onChange={handleChange}
                            
                        />
                        <label htmlFor="filterA" className="label"><img src={Butterfly} className="labelimage" alt=""/></label>
                        <br />
                        
                        <input 
                            type="radio"
                            id="filterB"
                            name="filter"
                            value="filterB"
                            checked={meme.filter === "filterB"}
                            onChange={handleChange}
                        
                        />
                        <label htmlFor="filterB" className="label">Filter B</label>
                        <br />
                        
                        <input 
                            type="radio"
                            id="filterC"
                            name="filter"
                            value="filterC"
                            checked={meme.filter === "filterC"}
                            onChange={handleChange}
                            
                        />
                        <label htmlFor="filterC" className="label">Filter C</label>
                        <br />
                    </fieldset>
                </div>               
                
                <div className="Form">               
                    <button 
                        className="form-button" onClick={retrieveNFT}>Get a New NFT</button>
                </div>    
            </div>
                
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.filter}</h2> 
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

                                unused toptext input
                                        <input  
                                                type="text"
                                                placeholder="Under Construction"
                                                className="form--input"
                                                name="topText"
                                                onChange={handleChange}
                                                value={meme.topText} /> 

            live used content below
            
                <input 
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText} />
           

            <div>
            <textarea
                value={meme.comments}
                placeholder="Web3 Experience"
                className="textarea"
                onChange={handleChange}
                name="comments" />
            <br/>

            </div>

        <div>


        </div>
    </main>
     )
     }

*/