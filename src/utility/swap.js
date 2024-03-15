import { ethers } from "ethers";
import { ABI_SWAP_SALE } from "./contracts/swapABi";
import { config } from "../config";

export const swapTokenFun = (signer, amount, address) => {
    return new Promise(async (resolve, reject) => {
        try {
            const contract = new ethers.Contract(
                config.swapAddress,
                ABI_SWAP_SALE,
                signer,
            );
            const value = ethers.utils.parseEther(`${amount}`);
            console.log("%c Line:14 🍞 value", "color:#42b983", value);
            let result;
            await contract
                .swapAndBridge(
                    value,
                    1,
                    5,
                    address,
                    address,
                    "0x0000000000000000000000000000000000000000",
                    "0x",
                    {
                        value: value,
                    },
                )
                .then((r) => {
                    result = r;
                    console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
                })
                .catch((err) => {
                    console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
                });
            await result.wait();
            resolve(result);
        } catch (error) {
            console.log("%c Line:62 🍬 error", "color:#465975", error);
            resolve(false);
        }
    });
};
