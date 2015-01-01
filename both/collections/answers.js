Answers = new Mongo.Collection("answers");

AnswersSchema = new SimpleSchema({
    pollId: {
      type: String
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
    optionId: {
      type: String
    }
});

Answers.attachSchema(AnswersSchema);
