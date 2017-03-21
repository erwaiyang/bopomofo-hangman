import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { guess } from '../actions/gameActions';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = { guess: '', answer: '' };
  }
  onGuessChange = (e) => {
    this.setState({ guess: e.target.value });
  };
  onGuessClick = () => {
    if (this.state.guess !== '') {
      this.props.guess(this.state.guess);
      this.setState({ guess: '' });
    }
  };
  onGuessKeydown = (e) => {
    if (e.keyCode === 13) {
      this.onGuessClick();
    }
  }
  render() {
    return (
      <div id="controls">
        <Input
          label="注音"
          placeholder="eg. ㄅ,ㄆ,ˊ（二聲）"
          value={this.state.guess}
          onChange={this.onGuessChange}
          onKeyDown={this.onGuessKeydown}
        />
        <Button primary onClick={this.onGuessClick}>猜注音</Button>
        <Input label="答案" placeholder="eg. 哈囉世界" />
        <Button secondary>直接猜！</Button>
      </div>
    );
  }
}

Controls.propTypes = {
  guess: PropTypes.func.isRequired,
};

export default connect(null, { guess })(Controls);
