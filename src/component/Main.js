import React from "react"
import {ConnectWallet, useAddress, useChainId} from "@thirdweb-dev/react"

const Main = () => {
  return (
    <div className="main">
      <nav>
        <div>
          <a className="nav-com">Home</a>
        </div>
        <div>
          [
          <a className="nav-com">
            <ConnectWallet className="connect-wallet" />
          </a>
          ]{/* [<a className="nav-com">CONNECT WALLET</a>] */}
        </div>
        {/* <div>
          [<a className="nav-com">0x6ea098aA836BfeD080c16a3ebd0769e39e1B86Ba</a>
          ]
        </div> */}
      </nav>
      <section>
        <table className="side-border-table">
          <thead>
            <tr>
              <th colSpan="5" className="nav-com no-border">
                <div className="left-border"></div>
                WMATIC X USDT
                <div className="right-border"></div>
              </th>
            </tr>
            <tr>
              <th className="nav-com no-border">
                <div className="left-border"></div>
                APR
                <div className="right-border"></div>
              </th>
              <th className="nav-com no-border">
                <div className="left-border"></div>
                LP<div className="right-border"></div>
              </th>
              <th className="nav-com no-border">
                <div className="left-border"></div>
                Liquidity
                <div className="right-border"></div>
              </th>
              <th className="nav-com no-border">
                <div className="left-border"></div>
                Multiplier<div className="right-border"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="nav-com no-border">
                <div className="left-border"></div>
                73.09% <div className="right-border"></div>
              </td>
              <td className="nav-com no-border">
                <div className="left-border"></div>
                Stake<div className="right-border"></div>
              </td>
              <td className="nav-com no-border">
                <div className="left-border"></div>
                $27,787.48<div className="right-border"></div>
              </td>
              <td className="nav-com no-border">
                <div className="left-border"></div>
                6x
                <div className="right-border"></div>
              </td>
            </tr>
            <tr>
              <td className="nav-com no-der">
                <div className="left-border"></div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter amount"
                />{" "}
                <div className="right-border"></div>
              </td>
              <td className="nav-com">
                <div className="left-border"></div>
                <button className="nav-com no-btn">Stake</button>
                <div className="right-border"></div>
              </td>
              <td className="nav-com ">
                <div className="left-border"></div>
                <button className="nav-com no-btn">Unstake</button>
                <div className="right-border"></div>
              </td>
              <td className="nav-com" style={{margin: "5px"}}>
                <div className="left-border"></div>
                <button className="nav-com no-btn">Harvest</button>
                <div className="right-border"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer>
        <div>
          <a className="nav-com no-border">
            * This project has recently been updated.
          </a>
        </div>
        <div>
          <a className="nav-com no-border">*** Disclaimer ***</a>
        </div>
        <div>
          <a className="nav-com no-border">
            I am in no way affiliated with the above projects, nor do I endorse
            them. Please do your own research before investing.
          </a>
        </div>
        <div className="social-link">
          <div className="nav-com no-border foot-border">
            -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
          </div>
          <div className="social-mid">
            |<a className="nav-com">Discord</a>-
            <a className="nav-com">Twitter</a>-<a className="nav-com">Github</a>
            -<a className="nav-com">Gitcoin</a>|
          </div>
          <div className="nav-com no-border foot-border">
            -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Main
