export const TokenABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_initialSupply",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "approveTokensForTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const TokenABIV2 = [
    {
        type: "constructor",
        stateMutability: "nonpayable",
        inputs: [
            { type: "string", name: "name", internalType: "string" },
            { type: "string", name: "symbol", internalType: "string" },
            { type: "uint256", name: "initialSupply", internalType: "uint256" },
            { type: "uint256", name: "_epoch", internalType: "uint256" },
            { type: "address", name: "_router", internalType: "address" },
        ],
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                type: "address",
                name: "owner",
                internalType: "address",
                indexed: true,
            },
            {
                type: "address",
                name: "spender",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "value",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                type: "address",
                name: "previousOwner",
                internalType: "address",
                indexed: true,
            },
            {
                type: "address",
                name: "newOwner",
                internalType: "address",
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                type: "address",
                name: "from",
                internalType: "address",
                indexed: true,
            },
            {
                type: "address",
                name: "to",
                internalType: "address",
                indexed: true,
            },
            {
                type: "uint256",
                name: "value",
                internalType: "uint256",
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "allowance",
        inputs: [
            { type: "address", name: "owner", internalType: "address" },
            { type: "address", name: "spender", internalType: "address" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "approve",
        inputs: [
            { type: "address", name: "spender", internalType: "address" },
            { type: "uint256", name: "amount", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "balanceOf",
        inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "burnAmount",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "currentEpoch",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
        name: "decimals",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "decreaseAllowance",
        inputs: [
            { type: "address", name: "spender", internalType: "address" },
            {
                type: "uint256",
                name: "subtractedValue",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "dipLimit",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "epochInterval",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "feeExpireTime",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "feeWallet",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256[]", name: "", internalType: "uint256[]" }],
        name: "getCurrentPrice",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address[]", name: "", internalType: "address[]" }],
        name: "getTopHolders",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "increaseAllowance",
        inputs: [
            { type: "address", name: "spender", internalType: "address" },
            { type: "uint256", name: "addedValue", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "lastEpochPrice",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "address", name: "", internalType: "contract LpStaking" },
        ],
        name: "lpStaking",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "lpStakingRebasePercentage",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "string", name: "", internalType: "string" }],
        name: "name",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "nextEpoch",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "owner",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "ownerRebaseFee",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "address", name: "", internalType: "address" }],
        name: "pair",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            {
                type: "address",
                name: "",
                internalType: "contract IPancakeSwapPair",
            },
        ],
        name: "pairContract",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "peggedPrice",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "rebase",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "renounceOwnership",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            {
                type: "address",
                name: "",
                internalType: "contract IPancakeSwapRouter",
            },
        ],
        name: "router",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "sellFee",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setEpochInterval",
        inputs: [
            {
                type: "uint256",
                name: "_epochInterval",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setFeeWallet",
        inputs: [
            { type: "address", name: "_feeWallet", internalType: "address" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setPeggedPrice",
        inputs: [
            { type: "uint256", name: "_pegPrice", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setRebasePercentage",
        inputs: [
            { type: "uint256", name: "_type", internalType: "uint256" },
            { type: "uint256", name: "_percentage", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setSellFees",
        inputs: [
            { type: "uint256", name: "_sellFee", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setStaking",
        inputs: [
            { type: "bool", name: "_isLpStaking", internalType: "bool" },
            { type: "address", name: "_staking", internalType: "address" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "setTaxEnable",
        inputs: [{ type: "bool", name: "_taxEnable", internalType: "bool" }],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [
            { type: "address", name: "", internalType: "contract Staking" },
        ],
        name: "staking",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "stakingRebasePercentage",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "string", name: "", internalType: "string" }],
        name: "symbol",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "taxEnable",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "view",
        outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
        name: "totalSupply",
        inputs: [],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "transfer",
        inputs: [
            { type: "address", name: "recipient", internalType: "address" },
            { type: "uint256", name: "amount", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [{ type: "bool", name: "", internalType: "bool" }],
        name: "transferFrom",
        inputs: [
            { type: "address", name: "sender", internalType: "address" },
            { type: "address", name: "recipient", internalType: "address" },
            { type: "uint256", name: "amount", internalType: "uint256" },
        ],
    },
    {
        type: "function",
        stateMutability: "nonpayable",
        outputs: [],
        name: "transferOwnership",
        inputs: [
            { type: "address", name: "newOwner", internalType: "address" },
        ],
    },
];
