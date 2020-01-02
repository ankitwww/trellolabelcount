const _ = require("underscore");
var data = //paste ur data here

const cards = data.cards;
const labels = data.labels;
console.log(`Processing  ${cards.length} cards against ${labels.length} labels`);
const uatFeedbacks = _.filter(cards, function(card){
    if(card.labels && card.labels.length){
        const count =  _.find(card.labels, label => label.name ==='My Label');
        return !!count;
    } else return false;
})
console.log("uatFeedbacks ", uatFeedbacks.length);