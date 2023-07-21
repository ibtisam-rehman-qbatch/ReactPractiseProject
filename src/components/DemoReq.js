import React from "react";
import "boxicons";

const DemoReq = () => {
  return (
    <div class="flex w-full h-3/6 bg-slate-100  mt-20">
      <div class=" text-white mx-auto mt-20 w-2/4 h-1/3">
        <p class="flex text-center font-bold text-black text-5xl mx-1/4 relative">
          Say goodbye to long queues, big updates, and confusion.
        </p>

        <br></br>
        <p class="text-slate-400 flex text-center">
          Excisd sknsljkm vsd;mvsdk vsdklj vsdm vlksd vmsdnvklsdv sjvsjdv
          sjldavsmdvlsjv ajkdac akcjbas casjkcnasj casjkcnasjnckja screen ajkc
          as casjncajks sdckjsd c lsd csnd ckjsd jkcdsjc sjcnsd cnskdj csdj
        </p>

        <br></br>

        <div class="flex text-center justify-center">
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