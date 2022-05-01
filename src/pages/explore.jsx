
import { useState } from 'react';
import NftCard from '../components/Nftcard';
import {fetchNFTs} from '../utils/fetchNFTs';

const Explore = () => {

    const [owner, setOwner] = useState("")
    const [contractAddress, setContractAddress] = useState("")
    const [NFTs, setNFTs] = useState("")
    

    return (
        <div>
            <header className="Explore-background">
                <div className='flex-grow flex justify-end mr-12 mb-12'>
                </div>
                <div className="Explore-textdisplay">
                    <div className="Explore-text">
                        <h1>
                            Wildwood NFT Explorer
                        </h1>
                        <p>Alchemy powered inspector to find NFTs by owner and contract address </p>
                    </div>
                    <div className="Explore-inputdiv">
                        <input className="Explore-input" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
                        <input className="Explore-input" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT Contract address (optional)'></input>
                    </div>
                    <div className="Explore-buttondiv">
                    <button className="Explore-search" onClick={() => {fetchNFTs(owner, contractAddress, setNFTs    )}}>Search</button>
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
*/