import React from "react";

const Footer = () => {
  return (
    <div className="ini-footer">
      <footer>
        <div className="paragraph m-3">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            venenatis a mi quis laoreet. Nam non ornare dolor,<br/> at tincidunt
            eros. Fusce dignissim massa tellus, eu dignissim enim pulvinar a.
            Mauris justo augue, accumsan non efficitur eu,<br/> tempor non tortor.
            Sed varius vulputate eros non bibendum. Cras sed interdum mauris.
          </p>
        
            <span>
                <label>Follow Us On : </label>
                <img className="instagram" src={require('../images/Instagram_logo.png')} alt=""/>
                <img className="twitter" src={require('../images/Twitter_logo.png')} alt=""/>
                <img className="facebook" src={require('../images/Facebook_Logo.png')} alt=""/>
                <a href="#" className="btn btn-success tombol-help">Help?</a>
            </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
