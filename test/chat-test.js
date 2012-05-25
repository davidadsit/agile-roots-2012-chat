var buster = require("buster")
var sinon = require("sinon")
var chat = require("chat")
var ui = require("chatUi")
var chatClient = require("chatClient")

buster.testCase("chat", {
  setUp: function() {
  },

  tearDown: function() {
    ui.userProvidedText.restore()
    chatClient.transmitMessage.restore()
  },

  "sends the message from the ui to the server": function () {
    var message = "the message the user entered"
    sinon.stub(ui, "userProvidedText").returns(message)
    sinon.spy(chatClient, "transmitMessage")

    chat.processMessage()

    assert.match(chatClient.transmitMessage.firstCall.args[0], message)
  }

})
