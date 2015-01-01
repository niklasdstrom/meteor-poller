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
    },
    "options.$._id": {
      type: String,
        autoValue: function() {
          //http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
          var id = Math.random().toString(36).substring(7);
          if (this.isInsert) {
            return id;
          } else if (this.isUpsert) {
            return {$setOnInsert: id};
          } else {
            this.unset();
          }
        }
    }
});

Polls.attachSchema(PollsSchema);