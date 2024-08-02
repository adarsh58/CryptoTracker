import React from 'react'

const Information = () => {
    return (
        <div>
            <div className="b-example-divider"></div>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">Manage All Your Wallets & Exchanges From One Place</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
                        </div>
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Get In-Depth Profit & Loss Analysis</h3>
                            <p>Connect your wallet to get 24h, daily, weekly and cumulative Profit & Loss analysis. Level up your crypto investing strategy.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em"></svg>
                        </div>
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Buy & Swap Crypto Where You Track It</h3>
                            <p>Purchase crypto with card in just a few steps. Then swap on best terms to keep up with trends.</p>

                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em"><use href="#tools"></use></svg>
                        </div>
                        <div>
                            <h3 className="fs-2 text-body-emphasis">All-In-One Crypto Tracker For Managing Your Crypto, DeFi & NFT Assets</h3>
                            <p>We’re the only platform on the market that supports all major crypto platforms and DeFi protocols.</p>
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="b-example-divider"></div>
        </div>
    )
}

export default Information
