/**
 * Created by omgitsg on 10/8/15.
 */
Template.messages.helpers({
  messages: [
    { text: "All these messages" },
    { text: "Uses the same template" },
    { text: "But have a different data context" },
    { text: "It's why these messages are all different!" },
    { text: "Hey!" },
    { text: "What's up man!" },
    { text: "Hello" }
  ]
});
Messages.insert({greeting: "hello"}, function() {});