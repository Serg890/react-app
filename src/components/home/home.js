import React, { Component } from "react";
import "./home.css";
import { ReactComponent as Card1 } from "../../assets/image/Group 48.svg";
import { ReactComponent as Card2 } from "../../assets/image/Group 53.svg";
import { ReactComponent as Card3 } from "../../assets/image/Group 49.svg";
import { ReactComponent as Card4 } from "../../assets/image/Group 50.svg";
import { ReactComponent as Magazine1 } from "../../assets/image/Bitmap.svg";
import { ReactComponent as Magazine2 } from "../../assets/image/Bitmap.svg";
import { ReactComponent as Magazine3 } from "../../assets/image/Bitmap.svg";
import { ReactComponent as Magazine4 } from "../../assets/image/Bitmap.svg";
import { ReactComponent as Magazine5 } from "../../assets/image/Bitmap.svg";
import { ReactComponent as Magazine6 } from "../../assets/image/Bitmap.svg";

class Home extends Component {
  render() {
    return (
      <>
        <div className="homeContainer">
          <div className="box box1">
            <div className="blockTop">
              <div className="blockTopText">
                <p className="title">How it works</p>
                <p className="text">Lorem ipsum dolor sit amet dan aku akan.</p>
              </div>
              <button className="btn">Start Uploading</button>
            </div>
            <div className="blockBottom">
              <div className="blockCards">
                <div className="cards">
                  <div className="svgCard">
                    <Card1 />
                  </div>

                  <div>
                    <h5 className="cardTitle">1. Upload files</h5>
                    <p className="cardText">
                      Upload up to 2GB of documents to our secure server for
                      easy access anywhere
                    </p>
                  </div>
                </div>
                <div className="cards cd2">
                  <div className="svgCard">
                    <Card2 />
                  </div>
                  <div>
                    <h5 className="cardTitle">2. Share</h5>
                    <p className="cardText">
                      Seamlessly share files with one to several collaborator
                    </p>
                  </div>
                </div>
              </div>

              <div className="blockCards">
                <div className="cards cd3">
                  <div className="svgCard">
                    <Card3 />
                  </div>
                  <div>
                    <h5 className="cardTitle">3. Edit</h5>
                    <p className="cardText">
                      Edit Word (.docx) and PDF (.pdf) files through our
                      integrated form editing API
                    </p>
                  </div>
                </div>
                <div className="cards">
                  <div className="svgCard">
                    <Card4 />
                  </div>
                  <div>
                    <h5 className="cardTitle">4. Send</h5>
                    <p className="cardText">
                      Send completed forms to recipients through Gmail, Outlook,
                      and Yahoo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box box2">
            <div className="blockTop">
              <div className="blockTopText">
                <p className="title">Browse our legal document library</p>
                <p className="text">
                  Over 1,000 attorney-approved legal documents
                </p>
              </div>
              <button className="btn">Browse Library</button>
            </div>
            <div className="blockBottom">
              <div className="blockMagazine">
                <div className="cardsMagazine">
                  <Magazine1 />
                  <h5 className="cardTitleMagaz">NDA</h5>
                  <p className="cardTextMagaz">Lorem ipsum</p>
                </div>
                <div className="cardsMagazine">
                  <Magazine2 />
                  <h5 className="cardTitleMagaz">Invoice</h5>
                  <p className="cardTextMagaz">Lorem ipsum</p>
                </div>
                <div className="cardsMagazine">
                  <Magazine3 />
                  <h5 className="cardTitleMagaz">Quit Clain Deed</h5>
                  <p className="cardTextMagaz">Lorem ipsum</p>
                </div>
              </div>
              <div className="blockMagazine">
                <div className="cardsMagazine">
                  <Magazine4 />
                  <h5 className="cardTitleMagaz">Rental Application</h5>
                  <p className="cardTextMagaz">Lorem ipsum</p>
                </div>
                <div className="cardsMagazine">
                  <Magazine5 />
                  <h5 className="cardTitleMagaz">Commercial Lease</h5>
                  <p className="cardTextMagaz">Lorem ipsum</p>
                </div>
                <div className="cardsMagazine">
                  <Magazine6 />
                  <h5 className="cardTitleMagaz">Roommate</h5>
                  <p className="cardTextMagaz">Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
