export const ABI_SWAP_SALE = [
    {
        inputs: [
            { internalType: "address", name: "_oft", type: "address" },
            { internalType: "address", name: "_nativeOft", type: "address" },
            {
                internalType: "address",
                name: "_uniswapRouter",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            { internalType: "uint16", name: "dstChainId", type: "uint16" },
            { internalType: "address", name: "to", type: "address" },
            {
                internalType: "address payable",
                name: "refundAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "zroPaymentAddress",
                type: "address",
            },
            { internalType: "bytes", name: "adapterParams", type: "bytes" },
        ],
        name: "bridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "nativeOft",
        outputs: [
            { internalType: "contract INativeOFT", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "oft",
        outputs: [
            { internalType: "contract IOFTCore", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            { internalType: "uint256", name: "amountOutMin", type: "uint256" },
            { internalType: "uint16", name: "dstChainId", type: "uint16" },
            { internalType: "address", name: "to", type: "address" },
            {
                internalType: "address payable",
                name: "refundAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "zroPaymentAddress",
                type: "address",
            },
            { internalType: "bytes", name: "adapterParams", type: "bytes" },
        ],
        name: "swapAndBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "uniswapRouter",
        outputs: [
            {
                internalType: "contract IUniswapV2Router02",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
