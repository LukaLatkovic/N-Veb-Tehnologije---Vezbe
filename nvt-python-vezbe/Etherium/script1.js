async function loadTokenInfo() {
    const tokenAddress = document.getElementById("tokenAddress").value.trim();
    const walletAddress = document.getElementById("walletAddress").value.trim();
    const status = document.getElementById("status");

    clearResult();

    if (!tokenAddress) {
        showError("Molim unesite adresu ERC-20 tokena.");
        return;
    }

    if (!ethers.utils.isAddress(tokenAddress)) {
        showError("Adresa tokena nije ispravna Ethereum adresa.");
        return;
    }

    if (walletAddress && !ethers.utils.isAddress(walletAddress)) {
        showError("Wallet adresa nije ispravna Ethereum adresa.");
        return;
    }

    if (!window.ethereum) {
        showError("MetaMask nije instaliran. Instalirajte MetaMask i izaberite Sepolia mrežu.");
        return;
    }

    try {
        status.className = "";
        status.textContent = "Učitavanje podataka...";

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        await provider.send("eth_requestAccounts", []);

        const network = await provider.getNetwork();

        if (network.chainId !== 11155111) {
            showError("MetaMask nije povezan na Sepolia mrežu. Promenite mrežu na Sepolia i pokušajte ponovo.");
            return;
        }

        const abi = [
            "function name() view returns (string)",
            "function symbol() view returns (string)",
            "function decimals() view returns (uint8)",
            "function totalSupply() view returns (uint256)",
            "function balanceOf(address) view returns (uint256)"
        ];

        const contract = new ethers.Contract(tokenAddress, abi, provider);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();

        document.getElementById("tokenName").textContent = name;
        document.getElementById("tokenSymbol").textContent = symbol;
        document.getElementById("tokenDecimals").textContent = decimals;
        document.getElementById("tokenSupply").textContent =
            ethers.utils.formatUnits(totalSupply, decimals) + " " + symbol;

        if (walletAddress) {
            const balance = await contract.balanceOf(walletAddress);

            document.getElementById("userBalance").textContent =
                ethers.utils.formatUnits(balance, decimals) + " " + symbol;
        } else {
            document.getElementById("userBalance").textContent = "Wallet adresa nije uneta.";
        }

        status.className = "success";
        status.textContent = "Podaci su uspešno učitani.";
    } catch (error) {
        console.error(error);

        showError(
            "Greška pri učitavanju podataka. Proverite da li je adresa tokena ispravna i da li je token ERC-20 na Sepolia mreži."
        );
    }
}

function clearResult() {
    document.getElementById("tokenName").textContent = "-";
    document.getElementById("tokenSymbol").textContent = "-";
    document.getElementById("tokenDecimals").textContent = "-";
    document.getElementById("tokenSupply").textContent = "-";
    document.getElementById("userBalance").textContent = "-";

    const status = document.getElementById("status");
    status.className = "";
    status.textContent = "";
}

function showError(message) {
    const status = document.getElementById("status");
    status.className = "error";
    status.textContent = message;
}

document.getElementById("showButton").addEventListener("click", loadTokenInfo);