import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Calc from './Calc.jsx';

Meteor.startup(() => {
  render(<Calc />, document.getElementById('render-target'));
});
