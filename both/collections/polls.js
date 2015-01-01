Polls = new Mongo.Collection("polls");

PollsSchema = new SimpleSchema({
    question: {
        type: String,
        label: "Question",
        max: 200
    },
    createdAt: {
      type: Date,
        autoValue: function() {
          if (this.isInsert) {
            return new Date;
          } else if (this.isUpsert) {
            return {$setOnInsert: new Date};
          } else {
            this.unset();
          }
        }
    },
    options: {
      type: [Object]
    },
    "options.$.title": {
      type: String
    }
});

Polls.attachSchema(PollsSchema);