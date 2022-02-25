export default {
  // get posts by person
  posts: (obj, args, context, info) => {
    return context.db.models.Post.findAll({
      where: {
        author: obj.id,
      },
    });
  },
};
