import _ from 'lodash';
import $ from 'jquery';
import './index.scss';
import jpg from './1.jpg'

var img1 = document.createElement("img");
img1.src = jpg;
document.body.appendChild(img1);

function component() {
  var $div = $('<div/>')

    // Lodash, currently included via a script, is required for this line to work
      $div.html(_.join(['Hello', 'webpack'], ' '));

        return $div;
	}

	$(document.body).append(component());
