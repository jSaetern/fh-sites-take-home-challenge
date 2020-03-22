var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js Ts');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * test
 */
describe('Rank a Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * test
 */
describe('Rank a Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

// More tests go here

describe('Rank a Straight Flush', function() {
  it('Return straight flush when hand given', function() {
    var hand = new PokerHand('9s 8s 7s 6s 5s');
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank a Four of a Kind', function() {
  it('Return four of a kind when hand given', function() {
    var hand = new PokerHand('Ac Ad Ah As 2c');
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

describe('Rank a Full House', function() {
  it('Return full house when hand given', function() {
    var hand = new PokerHand('Ac Ad Ah Ks Kc');
    assert.equal(hand.getRank(), 'Full House');
  });
});

describe('Rank a Straight', function() {
  it('Return straight when hand given', function() {
    var hand = new PokerHand('Ac 2s 3s 4s 5s');
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank a Three of a Kind', function() {
  it('Return three of a kind when hand given', function() {
    var hand = new PokerHand('9s 9c 9d 2s 5s');
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});

describe('Rank a High Card', function() {
  it('Return high card when hand given', function() {
    var hand = new PokerHand('2s 4c 6d 8h 9s');
    assert.equal(hand.getRank(), 'High Card');
  });
});







/**

PSEUDO CODE & NOTES SECTION:
-Build function that generates random 5-card hand of ranks and suits
-Duplicates of the same card should be invalid
-More than 4 ranks of the same value should be invalid

**/