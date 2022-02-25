import { Op } from "sequelize";

export default {
  allPeople: (obj, args, context, info) => {
    // SELECT * FROM People
    return context.db.models.Person.findAll();
  },

  allPosts: (obj, args, context, info) => {
    return context.db.models.Post.findAll({
      where: {
        title: {
          [Op.like]: `%${args.search || ""}%`,
        },
      },
    });
  },

  getPerson: (obj, args, context) => {
    return context.db.models.Person.findOne({
      where: {
        id: args.id,
      },
    });
  },
  getPost: (obj, args, context) => {
    return context.db.models.Post.findOne({
      where: {
        id: args.id,
      },
    });
  },
};
