const Info = ({ Changestate, nftitem }) => {
    if (!nftitem) {
        return <div>Loading...</div>; // Render a loading message or component if nftitem is null
    }

    console.log(nftitem);

    return (
        <div className=" flex items-center justify-center max-sm:p-7 px-48 gap-4  pt-32 border">
            <br />
            <div className="font-bold text-2xl">
                <h1 className="text-3xl">NFT Name: {nftitem.name}</h1>
                <br />
                <div className="">
                    <p className="">Item Description:</p>
                    <p className="border border-3 border-red-500 p-4 py-12">{nftitem.description}</p>
                </div>
            </div>
            {/* <div className="font-bold text-2xl">Item Description : {nftitem.description}</div> */}
            <div>
                <div className=" max-w-50">
                    <video src={nftitem.video} className='h-[450px] max-w-500 ' autoPlay />
                </div>
                <div className=" content-center">
                    <button onClick={Changestate} className=" px-9 py-3 bg-black text-red-500 text-4xl rounded-lg">Exit</button>
                </div>
            </div>
        </div>
    );
}

export default Info;
