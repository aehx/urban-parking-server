const User = require("../database/models/user.model");

exports.updateFavoriteParking = async (userId, parkingName) => {
  try {
    const update = await User.findById(userId).favorites.includes(parkingName);
      // ? { $pull: { favorites: parkingName } }
      // : { $push: { favorites: parkingName } };

    const updatedUserFavorite = await User.findOneAndUpdate(
      {_id : userId},
      update,
      { new: true }
    );

    if(!updatedUserFavorite){
      return {error:"user not found"}
    }
    return update;
  } catch (error) {
    return error;
  }
};
