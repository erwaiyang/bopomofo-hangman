import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { guess } from '../actions/gameActions';

function Controls(props) {
  this.onGuessChange = (e) => {
    this.b = e.target.value;
  };
  return (
    <div id="controls">
      <Input label="注音" placeholder="eg. ㄅ,ㄆ,ˊ（二聲）" onChange={this.onGuessChange} />
      <Button primary onClick={() => props.guess(this.b)}>猜注音</Button>
      <Input label="答案" placeholder="eg. 哈囉世界" />
      <Button secondary>直接猜！</Button>
    </div>
  );
}

Controls.propTypes = {
  guess: PropTypes.func.isRequired,
};

export default connect(null, { guess })(Controls);
