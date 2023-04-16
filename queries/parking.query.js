const User = require("../database/models/user.model");

exports.updateFavoriteParking = async (userId, parkingName) => {
  try {
    const updatedUserFavorite = await User.findOneAndUpdate(
      {_id : userId},
      {
        [parkingName]: {
          $cond: [
            { $in: [parkingName, "$favorites"] },
            { $pull: { favorites: parkingName } },
            { $push: { favorites: parkingName } },
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
