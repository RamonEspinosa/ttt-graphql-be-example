export default {
  // get person/author by post
  author: (obj, args, context, info) => {
    return context.db.models.Person.findOne({
      where: {
        id: obj.author,
      },
    });
  },
};
