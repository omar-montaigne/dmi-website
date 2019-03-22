import React, { Component } from "react";

class TalkToExpert extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <form>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="abc@xyz.com"
            />
            <textarea value="Message" required name="Message">
              Message
            </textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TalkToExpert;
