import React, { Component } from "react";
import "../scss/rd-sec.scss";

class RDSection extends Component {
  state = {
    value: 0
  };

  handleChange = index => {
    this.setState({
      value: index
    });
  };
  render() {
    const TabDatas = this.props.TabsData;
    // const displayTabs = TabDatas.map((shit, index) => (
    //   <Tab label={shit.TabName} key={index} />
    // ));

    return (
      <div className="rd-box">
        <div className="rd-tab-box clearfix">
          {this.props.TabsData.map((TabData, index) => {
            return (
              <button
                key={index}
                onClick={() => this.handleChange(index)}
                className={`${this.state.value === index && "active"}`}
              >
                {TabData.TabName}
              </button>
            );
          })}
          {/* <Tab label="RD" />
              <Tab label="TOc" />
              <Tab label="VI" /> */}
        </div>

        {TabDatas.map((TabData, index) => (
          <div
            dangerouslySetInnerHTML={{ __html: TabData.TabText }}
            key={index}
            className={`rd-content-box ${this.state.value === index &&
              "active-content"}`}
          />
        ))}

        {/* {this.state.value === 0 && (
            <TabContainer>
              <div dangerouslySetInnerHTML={{ __html: TabData.RD_Data }} />
              <p>shit</p>
            </TabContainer>
          )}
          {this.state.value === 1 && (
            <TabContainer>
              <div dangerouslySetInnerHTML={{ __html: TabData.TOC_Data }} />
            </TabContainer>
          )}
          {this.state.value === 2 && (
            <TabContainer>
              <div
                dangerouslySetInnerHTML={{ __html: TabData.Visual_Insights }}
              />
            </TabContainer>
          )} */}
      </div>
    );
  }
}

export default RDSection;

{
  /* {Tabs.map((Tab, index) => {
            {
              this.state.value === index && (
                <TabContainer>
                  <div
                    dangerouslySetInnerHTML={{ __html: Tab[index].TabText }}
                  />
                </TabContainer>
              );
            }
          })} */
}
