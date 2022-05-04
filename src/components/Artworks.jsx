import { setGlobalState, useGlobalState, truncate } from '../store'

const Artworks = () => {
  const [nfts] = useGlobalState('nfts')

  const setNFT = (nft) => {
    setGlobalState('nft', nft)
    setGlobalState('showModal', 'scale-100')
  }

  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          {nfts.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3"
            >
              <img
                src={nft.metadataURI}
                alt={truncate(nft.title, 6)}
                className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
              />
              <h4 className="text-white font-semibold">{nft.title}</h4>
              <p className="text-gray-400 text-xs my-1">
                {truncate(nft.description)}
              </p>
              <div className="flex justify-between items-center mt-3 text-white">
                <div className="flex flex-col">
                  <small className="text-xs">Current Price</small>
                  <p className="text-sm font-semibold">{nft.cost} ETH</p>
                </div>

                <button
                  onClick={() => setNFT(nft)}
                  className="shadow-lg shadow-black text-white text-sm bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
                >
                  Buy NFT
                </button>
              </div>
            </div>
          ))}
        </div>

        {nfts.length > 0 ? (
          <div className="text-center my-5">
            <button
              className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2"
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Artworks
