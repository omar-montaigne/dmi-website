import React from "react";
import "../scss/testimonials.scss";
const data = [
  {
    name: "DR. ALBERTO ARNAVAS",
    designetion: "Director General",
    company: "EUROPEAN FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "ALBERTO ARNAVAS",
    designetion: "General",
    company: " FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "DR. ALBERTO ARNAVAS",
    designetion: "only general",
    company: "EUROPEAN FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "DR. ALBERTO ARNAVAS",
    designetion: "Director General",
    company: "EUROPEAN FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "ALBERTO ARNAVAS",
    designetion: "General",
    company: " FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "DR. ALBERTO ARNAVAS",
    designetion: "only general",
    company: "EUROPEAN FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "DR. ALBERTO ARNAVAS",
    designetion: "Director General",
    company: "EUROPEAN FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "ALBERTO ARNAVAS",
    designetion: "General",
    company: " FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "DR. ALBERTO ARNAVAS",
    designetion: "only general",
    company: "EUROPEAN FEDERATION FOR CONSTRUCTION CHEMICAL",
    message:
      " looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
];

class Testimonials extends React.Component {
  state = {
    value: 0
  };
  handleBack = () => {
    if (this.state.value !== 1 && this.state.value > 0) {
      this.setState({
        value: this.state.value - 1
      });
    } else if (this.state.value === 0) {
      this.setState({
        value: data.length - 1
      });
    } else {
      this.setState({
        value: 0
      });
    }
  };
  handleNext = () => {
    if (
      this.state.value !== data.length - 1 &&
      this.state.value < data.length - 1
    ) {
      this.setState({
        value: this.state.value + 1
      });
    } else if (this.state.value === data.length - 1) {
      this.setState({
        value: 0
      });
    } else {
      this.setState({
        value: data.length - 1
      });
    }
  };
  render() {
    return (
      <div className=" testimonials-box ">
        <div className="words-of-trust">
          <h4>Words of Trust</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. It is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
          </p>
        </div>
        <div className="testimonials-slider">
          <div className="slide-content">
            <button onClick={this.handleBack} className="slide-back-btn">
              <img src="/static/Images/back.svg" />
            </button>
            <div className="testimonials-slides">
              <div
                className="testimonials-content"
                style={{
                  transform: `translateX(-${this.state.value * 100}%)`,
                  transition: "transform 0.5s ease-in-out"
                }}
              >
                {data.map((info, index) => (
                  <div
                    className={`testimonial-item ${this.state.value === index &&
                      "active-testimonial"}`}
                    // style={{ minWidth: `${100 / data.length}%` }}
                  >
                    <h4>{info.name}</h4>
                    <p>{info.designetion}</p>
                    <p>
                      <b>{info.company}</b>
                    </p>
                    <p>{info.message}</p>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={this.handleNext} className="slide-next-btn">
              <img src="/static/Images/next.svg" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
