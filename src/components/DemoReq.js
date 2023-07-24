import React from "react";
import "boxicons";

const DemoReq = () => {
  return (
    <div className="flex w-full h-3/6 bg-slate-100  ">
      <div className=" text-white mx-auto mt-20 w-2/4 h-1/3">
        <h1 className="pb-2 text-center font-[PlayfairDisplay] text-[48px] font-bold leading-tight text-black">
          Say goodbye to long queues, big <br />
          updates, and <span className="text-[#10B981]">confusion</span>.
        </h1>

        <p className="text-slate-400 flex text-center">
          Excisd sknsljkm vsd;mvsdk vsdklj vsdm vlksd vmsdnvklsdv sjvsjdv
          sjldavsmdvlsjv ajkdac akcjbas casjkcnasj casjkcnasjnckja screen ajkc
          as casjncajks sdckjsd c lsd csnd ckjsd jkcdsjc sjcnsd cnskdj csdj
        </p>

        <br></br>

        <div className="flex text-center justify-center">
          <button className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4">
            Request Demo
            <box-icon
              name="right-arrow-alt"
              color="white"
              className="ml-2"
            ></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoReq;
