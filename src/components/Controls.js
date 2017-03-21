import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';

function Controls() {
  return (
    <div id="controls">
      <Input label="注音" placeholder="eg. ㄅ,ㄆ,ˊ（二聲）" /><Button primary>猜注音</Button>
      <Input label="答案" placeholder="eg. 哈囉世界" /><Button secondary>直接猜！</Button>
    </div>
  );
}

Controls.propTypes = {};

export default connect()(Controls);
