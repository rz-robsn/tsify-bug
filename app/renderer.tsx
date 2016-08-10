import {Observable} from 'rxjs/Rx';
import {run} from '@cycle/rxjs-run';
import {makeDOMDriver, h1, html} from '@cycle/dom';

function main() {
  const sinks = {
    DOM: Observable.interval(1000)
    .map(i =>
      <div>
          <input type="checkbox" /> Toggle me
          <p>ON</p>
      </div>
    )
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app-container')
};

run(main, drivers);
