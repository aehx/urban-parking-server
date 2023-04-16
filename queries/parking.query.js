const User = require("../database/models/user.model");

exports.updateFavoriteParking = async (userId, parkingName) => {
  try {
    const update = await User.findById(userId);
    const include = update.favorites.includes(parkingName)? { $pull: { favorites: parkingName } }
    : { $push: { favorites: parkingName } };
      

    const updatedUserFavorite = await User.findOneAndUpdate(
      {_id : userId},
      include,
      { new: true }
    );

    if(!updatedUserFavorite){
      return {error:"user not found"}
    }
    return updatedUserFavorite;
  } catch (error) {
    return error;
  }
};
