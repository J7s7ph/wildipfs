import React from "react"

const NftCard = ({ image, id, title, address, description, attributes }) => {
    return (
        <div className="Nftcard">
            <img className="Nftcard-image" key={id} src={image}></img>
            
            {/*<div className="">
                <div className="">
                    <div className="">
                        <h3 className="text-xl">{title}</h3>
                        <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
                    </div>
                    <div className="">
                        <a target="_blank" className="text-blue-700" href={`https://etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a>
                    </div>
                </div>
                <p>{description? description.slice(0, 50) : "No Description"}</p>
            </div>
             <div className="Nftcard-atrribute"> 
                {attributes?.length > 0 && attributes.map(attribute => {
                    return (
                        <div>
                            <p className="Nftcard-trait">{attribute.trait_type}:</p>
                            <p className="Nftcard-trait">{attribute.value}</p>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

export default NftCard