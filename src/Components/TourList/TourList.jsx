import React, { Component } from 'react';
import './TourList.css';

class TourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    };
  }
  renderContent = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, img, City, location, Info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <div className="Tour-List-Section">
        <div className="tour-grid">
          {/* =====================First ToutList========================== */}
          <div className="tour">
            <div className="img-container">
              <img src={img} alt="" />
              <span>
                <i
                  className="far fa-window-close"
                  onClick={() => {
                    removeTour(id);
                  }}
                ></i>
              </span>
            </div>
            <div className="tour-body">
              <h2> {City} </h2>
              <h3> {location} </h3>
              <h4>
                Information
                <span>
                  <i
                    className="far fa-caret-square-down"
                    onClick={this.renderContent}
                  ></i>
                </span>
              </h4>
              {this.state.showInfo && <p className="info">{Info}</p>}
            </div>
          </div>
          {/* =====================First ToutList========================== */}
        </div>
      </div>
    );
  }
}

export default TourList;
