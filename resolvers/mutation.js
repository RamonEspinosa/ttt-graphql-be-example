export default {
  createPerson: (obj, args, context, info) => {
    return context.db.models.Person.create(args.payload);
  },
  updatePerson: async (obj, args, context, info) => {
    await context.db.models.Person.update(args.payload, {
      where: {
        id: args.payload.id,
      },
    });
    return context.db.models.Person.findOne({
      where: {
        id: args.payload.id,
      },
    });
  },
  deletePerson: (obj, args, context, info) => {
    return context.db.models.Person.destroy({
      where: {
        id: args.id,
      },
    });
  },
  createPost: (obj, args, context, info) => {
    return context.db.models.Post.create(args);
  },
  deletePost: (obj, args, context, info) => {
    return context.db.models.Post.destroy({
      where: {
        id: args.id,
      },
    });
  },
};
