import { SimpleSection } from "../models/SimpleSection";

export const simpleSections: { [key: string]: SimpleSection } = {
    smartContractsOffchainJsCode: {
        header: "Smart contracts are regular JavaScript code",
        textSections: ["Smart contracts, the fundamental aspect of VSC, are implemented as JavaScript (JS) code. This design choice provides numerous advantages, including flexibility, accessibility, and ease of use for developers.",
            "By utilizing JS as the programming language for smart contracts, developers can leverage the extensive ecosystem and familiarity associated with this widely adopted language. JavaScript is a versatile language that is well-known among developers, making it easier to write, test, and deploy smart contracts. The abundance of tools and documentation available for JavaScript further streamlines the development process and enhances productivity.",
            "VSC utilizes a sandboxed Virtual Machine (VM) to execute JavaScript code securely and efficiently. A limited set of helper functions is provided to aid the developer in interacting with other contracts on the chain. Some inbuilt JavaScript functionality is restricted (e.g. randomness functions) to provide a deterministic execution behavior, required for consensus about the result of a contract."]
    },
    smartContractControlledMultisigs: {
        header: "Smart contract controlled multisigs", 
        textSections: ["Smart contracts possess the capability to control multisig operations and actively engage in on-chain activities. This functionality grants them the ability to participate in contract-specific operations conducted through multisignature accounts, enabling various functionalities and use cases within decentralized applications.",
            "One prominent use case where smart contracts leverage multisig control is in decentralized exchanges (DEXs) or similar platforms. In these scenarios, smart contracts can facilitate the movement of funds to and from multisignature accounts, allowing for secure and trustless transactions between users. Another important use case is HIVE account creation, this allows for accounts to be created entirely without a centralized backend. By utilizing multisigs, smart contracts can ensure that the appropriate signatures and authorization are in place before executing operations, enhancing the security and integrity of the process."]
    },
    groupOfValidators: {
        header: "Executed via a group of validators on a smart contract basis", 
        textSections: ["By executing smart contracts via a group of validators on a smart contract basis, VSC ensures a robust and distributed approach to smart contract execution. This method allows for efficient processing, consensus, and validation of transactions, enabling the network to handle a wide range of decentralized applications and use cases effectively.",
            "The validator set for a smart contract consists of a predefined number of validators who are responsible for executing the associated transactions. These validators work collaboratively to reach consensus on the execution results and ensure the correctness of the smart contract's state transition."]
    },
    ipfsStateAndTransactions: {
        header: "Uses IPFS to store state and transactions", 
        textSections: ["To store the state and transactions of smart contracts, VSC utilizes the InterPlanetary File System (IPFS), which provides a decentralized and highly scalable storage solution.",
            "IPFS enables VSC to store and retrieve large amounts of data like e.g. contract code or contract output, compared to a traditional Layer 1 storage system. This enhances the overall flexibility and efficiency of the system."]
    },
    highlyScalableDataStructures: {
        header: "Highly scalable data structures", 
        textSections: ["To meet the demands of scalability in VSC, highly scalable data structures are employed. These data structures play a crucial role in efficiently managing and storing the vast amount of data generated by smart contracts. By leveraging innovative techniques such as Directed Acyclic Graphs (DAGs), Merkle trees, and Conflict-free Replicated Data Types (CRDTs), VSC can achieve a high degree of scalability.",
            "DAGs are a powerful data structure used in VSC to represent and organize the relationships between different data elements. They provide a flexible and efficient way to handle complex data dependencies, enabling the execution of transactions in parallel and optimizing the overall throughput of the system. With DAGs, VSC can scale horizontally by distributing the data appendix across multiple nodes, ensuring efficient processing of transactions and improving overall network performance.",
            "Conflict-free Replicated Data Types (CRDTs), on the other hand, offer an effective solution to handle concurrent updates and ensure consistency across distributed systems. CRDTs enable multiple nodes in the network to independently update and modify the shared data without conflicts or inconsistencies. They provide strong eventual consistency guarantees, allowing smart contract platforms to scale effectively by accommodating concurrent operations and minimizing synchronization overhead.",
            "Additionally, Merkle trees are utilized for data integrity and verification. They provide a hierarchical structure where data elements are organized in a tree-like fashion, with each level of the tree containing a hash of the data elements below it. This allows for quick and secure verification of the integrity of the data stored. Merkle trees are particularly useful in scenarios where proof of data inclusion or absence is required, providing a robust and efficient way to validate the correctness of the stored data.",
            "By leveraging these highly scalable data structures, smart contract platforms can handle increasing transaction volumes and complex data interactions with ease. These data structures provide the foundation for efficient data management, parallel processing, data integrity verification, and conflict resolution in VSC, paving the way for scalability and improved performance in decentralized applications."]
    },
    witnessesKeepTrackMultisig: {
        header: "Witnesses maintain the multisig", 
        textSections: ["By controlling multisigs, witnesses act as guardians of the smart contract's multisignature functionality. They maintain a watchful eye on the multisig accounts, verifying the validity of transactions, confirming the required signatures, and ensuring compliance with the specified conditions. Witnesses play a vital role in upholding the integrity and security of the multisig operations, preventing unauthorized or fraudulent activities within the VSC ecosystem."]
    },
    feelessSmartContractOperation: {
        header: "Zero fee/feeless smart contract operation", 
        textSections: ["Unlike traditional smart contract transactions that often incur fees for processing and verification, VSC's nearly feeless approach aims to make the deployment and execution of smart contracts more accessible and cost-effective. By minimizing transaction costs, it opens up new possibilities and encourages wider adoption of smart contracts across various areas and use cases."]
    },
}