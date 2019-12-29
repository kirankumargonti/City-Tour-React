import React, { Component } from 'react';
import './Tour.css';
import tourData from './TourData';
import TourList from '../TourList/TourList';

class Tour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toursDataInfo: tourData
    };
  }
  removeTour = id => {
    const sortedTours = this.state.toursDataInfo.filter(tour => tour.id !== id);
    this.setState({
      toursDataInfo: sortedTours
    });
  };

  render() {
    const { toursDataInfo } = this.state;
    return (
      <section className="tour-section">
        {toursDataInfo.map(tourInfo => {
          return <TourList key={tourInfo.id} tour={tourInfo} removeTour={this.removeTour} />;
        })}
      </section>
    );
  }
}

export default Tour;
