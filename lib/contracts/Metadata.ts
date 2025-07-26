export const MetadataABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_pass",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "SERVICE_ROLE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "addValidationStrategy",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "strategy",
                "type": "address",
                "internalType": "contract ValidationStrategyInterface"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "allowedFieldsCustomMetadata",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "isAllowed",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "isUnique",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "allowedFieldsMemberMetadata",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "isAllowed",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "isUnique",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "blacklisted",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "blacklisted",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deleteAllowedFieldCustomMetadata",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deleteAllowedFieldMemberMetadata",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "fieldValidationStrategies",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "validationStrategies",
                "type": "address",
                "internalType": "contract ValidationStrategyInterface"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getCustomMetadata",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getMemberMetadata",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getServiceMetadata",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "grantRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "hasRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "pass",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract PassInterface"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "removeValidationStrategy",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "strategy",
                "type": "address",
                "internalType": "contract ValidationStrategyInterface"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "callerConfirmation",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "revokeRole",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setAllowedFieldCustomMetadata",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "allowed",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setAllowedFieldMemberMetadata",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "allowed",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "isUnique",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "takenValuesMemberMetadata",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "value",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "isTaken",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "updateAdminVault",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "value",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateBlacklist",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "isBlacklisted",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateCustomMetadata",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "value",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateMemberMetadata",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "value",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "AllowedFieldCustomMetadataUpdated",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            },
            {
                "name": "author",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "allowed",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            },
            {
                "name": "isUnique",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "AllowedFieldMemberMetadataUpdated",
        "inputs": [
            {
                "name": "field",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            },
            {
                "name": "author",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "allowed",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            },
            {
                "name": "isUnique",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BlacklistUpdated",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "author",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "blacklisted",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "CustomMetadataUpdated",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "target",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "newValue",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "author",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MemberMetadataUpdated",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "newValue",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "author",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "previousAdminRole",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "newAdminRole",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RoleGranted",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RoleRevoked",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ServiceMetadataUpdated",
        "inputs": [
            {
                "name": "member",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "field",
                "type": "string",
                "indexed": true,
                "internalType": "string"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "newValue",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "author",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AccessControlBadConfirmation",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AccessControlUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "neededRole",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ]
    },
    {
        "type": "error",
        "name": "FieldIsNotAllowed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MemberInBlacklist",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MemberIsAdmin",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotAMember",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UniqueFieldTaken",
        "inputs": []
    }
] as const;
