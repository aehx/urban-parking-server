const User = require("../database/models/user.model");

exports.updateFavoriteParking = async (userId, parkingName) => {
  try {
    const updatedUserFavorite = await User.findOneAndUpdate(
      userId,
      {
        [parkingName]: {
          $cond: [
            { $in: [parkingName, "$favorites"] },
            { $pull: { favoris: parkingName } },
            { $push: { favoris: parkingName } },
          ],
        },
      },
      { new: true }
    );
    return updatedUserFavorite.favorites;
  } catch (error) {
    return error;
  }
};
