class PokerHand {
  constructor(hand) {
    this.theHand = hand;
  }

  // Implement poker hand ranking
  getRank() {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    const suits = ["c", "d", "h", "s"];
    let rankArray = [];
    let suitArray = [];

    var handGiven = this.theHand;
    let arrayHandGiven = handGiven.split(" ");

    // Sort the rank from lowest to highest
    function sorted() { 
      let sortedHand = [];
      for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < arrayHandGiven.length; j++) {
          if (ranks[i] === arrayHandGiven[j].charAt(0)) {
            sortedHand.push(arrayHandGiven[j]);
          }
        }
      }
      return sortedHand;
    }

    let sortedHandGiven = sorted(arrayHandGiven);
    
    // Push the sorted ranks and suits into their empty arrays
    function addRankSuit(sortedHandGiven) {
      for (let i = 0; i < sortedHandGiven.length; i++) {
        let card = sortedHandGiven;
        rankArray.push(card[i].charAt(0));
        suitArray.push(card[i].charAt(1));
      }
    }

    addRankSuit(sortedHandGiven);
  
    // Count the number of ranks that are the same from ranks array
    function countRanks(rankArray) { 
      let rankCount = {};
      rankArray.forEach(function(x) {
        rankCount[x] = (rankCount[x] || 0) + 1;
      });
      return rankCount;
    }

    // Count the number of suits that are the same from suits array
    function countSuits(suitArray) {
      let suitCount = {};
      suitArray.forEach(function(x) {
        suitCount[x] = (suitCount[x] || 0) + 1;
      });
      return suitCount;
    }    

    // Check the numerical order of the ranks array
    function isStraight() { 
      let index = ranks.indexOf(rankArray[0]);
      let ref = ranks.slice(index, index + 5).join("");
      let section = rankArray.slice(0).join("");
      if (section === "TJQKA" && section === ref) {
        return "royal";
      } else if (section === "2345A" || section === ref) {
        return "straight";
      } else {
        return "false";
      }
    }

    // Check if all suits are the same in the suits array
    function isFlush() { 
      let cS = countSuits(suitArray);
      if (Object.keys(cS).find(key => cS[key] === 5)) {
        return true;
      } else {
        return false;
      }
    }
  
    // Check for pair instances in the ranks array
    function pairs() { 
      let rS = countRanks(rankArray);
      return Object.keys(rS).filter(key => rS[key] === 2).length;
    }
  
    // Evaluate and determine the hand ranking
    function evaluateHand() {
      let rS = countRanks(rankArray);
      if (isFlush() === true && isStraight() === "royal") {
        var royal = "Royal Flush";
        return royal;
      } else if (isFlush() === true && isStraight() === "straight") {
        var str = "Straight Flush";
        return str;
      } else if (Object.keys(rS).find(key => rS[key] === 4)) {
        var four = "Four of a Kind";
        return four;
      } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 1) {
        var fullhouse = "Full House";
        return fullhouse;
      } else if (isFlush() === true) {
        var flush = "Flush";
        return flush;
      } else if (isStraight() === "straight") {
        var straight = "Straight";
        return straight;
      } else if (Object.keys(rS).find(key => rS[key] === 3)) {
        var three = "Three of a Kind";
        return three;
      } else if (pairs() === 2) {
        var two = "Two Pair";
        return two;
      } else if (pairs() === 1) {
        var one = "One Pair";
        return one;
      } else {
        var high = "High Card";
        return high;
      }
    }

    return evaluateHand();

  }
}

module.exports = PokerHand;