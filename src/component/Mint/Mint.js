import { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Button from "../common/button";

import SliderNFT from "./Slider";

import MintStyleWrapper from "./Mint.style";

const Mint = () => {
  const [count, setCount] = useState(1);

  const handleChenge = () => {};

  return (
    <MintStyleWrapper>
      <div className="">
        <div className="">
          <div className="flex justify-center w-full">
            <div className="mint_left_inner px-10 sm:px-0">
              <SliderNFT />
              <ul className="mint_count_list">
                <li>
                  <h5>Remaining</h5>
                  <h5>
                    0 /<span>300</span>
                  </h5>
                </li>
                <li>
                  <h5>Price</h5>
                  <h5>1235 SGB</h5>
                </li>
                <li>
                  <h5>Quantity</h5>
                  <div className="mint_quantity_sect">
                    <button
                      className="input_number_decrement"
                      onClick={() => (count > 1 ? setCount(count - 1) : count)}>
                      -
                    </button>
                    <input
                      className="input_number"
                      type="text"
                      value={count}
                      onChange={handleChenge}
                    />
                    <button
                      className="input_number_increment"
                      onClick={() => (count > 0 ? setCount(count + 1) : count)}>
                      +
                    </button>
                  </div>
                  <h5>
                    <span>0.30</span> ETH
                  </h5>
                </li>
              </ul>
              <Button variant="mint" className="py-4 w-full">
                {" "}
                Mint now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MintStyleWrapper>
  );
};

export default Mint;
