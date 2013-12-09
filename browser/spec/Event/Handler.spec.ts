/// <reference path="../../jasmine_tss.ts" />

import Click = require('com/Event/Click');
import ActionType = require('com/Data/ActionType');

import IMouseEvent = require('com/Data/IMouseEvent');

describe('main', () => {

  var eventFake: MouseEvent;

  var click: Click;

  beforeEach(() => {
    eventFake = <MouseEvent>{};
    eventFake.clientX = 100;
    eventFake.clientY = 200;
    eventFake.target = <HTMLElement>{
      id: 'fakeId'
    };

    click = new Click();
  });

  it('returns an object with a LEFTCLICK type for left clicks', () => {
    eventFake.button = 0;

    var result = click.onMousedown(eventFake);

    expect(result.type).toEqual(ActionType.LEFTCLICK);
  });

  it('returns an object with a RIGHTCLICK type for right clicks', () => {
    eventFake.button = 1;

    var result = click.onMousedown(eventFake);

    expect(result.type).toEqual(ActionType.RIGHTCLICK);
  });

  it('returns an object with the position of the click', () => {
    var result = click.onMousedown(eventFake);

    expect(result.pos.x).toEqual(100);
    expect(result.pos.y).toEqual(200);
  });

  it('returns an object containing the id of the element clicked on', () => {
    var result = click.onMousedown(eventFake);

    expect(result.el.id).toEqual('fakeId');
  });

});