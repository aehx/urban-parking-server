const { updateFavoriteParking } = require("../queries/parking.query");
const {findUserPerEmail } = require("../queries/user.queries");

exports.getParking = async (_req, res, next) => {
  try {
    const parkingUrls = [
      "https://data.orleans-metropole.fr/api/records/1.0/search/?dataset=mobilite-places-disponibles-parkings-en-temps-reel&q=&rows=20&start=4",
      "https://data.opendatasoft.com/api/records/1.0/search/?dataset=mobilites-stationnement-des-parkings-en-temps-reel%40grandpoitiers&q=&rows=9",
      "https://data.opendatasoft.com/api/records/1.0/search/?dataset=places-disponibles-parkings-saemes%40saemes&q=&rows=20&start=19&facet=date&facet=nom_parking&facet=type_de_parc&facet=horaires_d_acces_au_public_pour_les_usagers_non_abonnes&facet=countertype&facet=counterfreeplaces",
      "https://data.opendatasoft.com/api/records/1.0/search/?dataset=st_park_p%40scnbdx&q=&rows=20&start=69&facet=exploit&facet=ta_type&facet=secteur&facet=propr&facet=etat&facet=type",
    ];
    const parkingData = await Promise.all(
      parkingUrls.map((url) => fetch(url).then((res) => res.json()))
    ).then((responses) => {
      return responses
        .map((response) => {
          return response.records.map((parking) => {
            const { fields, geometry } = parking;
            if (fields && geometry) {
              const {
                name,
                dispo,
                id,
                nom,
                places,
                counterfreeplaces,
                facilityid,
                libres,
                ident,
                nom_parking,
                geo_shape,
              } = fields;
              const parkingId = ident || facilityid || id;
              const parkingName = name || nom || nom_parking;
              const parkingDispo =
                dispo || places || counterfreeplaces || libres;
              const parkingLat = geo_shape
                ? geo_shape.coordinates[1]
                : geometry.coordinates[1];
              const parkingLng = geo_shape
                ? geo_shape.coordinates[0]
                : geometry.coordinates[0];
              return {
                name: parkingName,
                dispo: parkingDispo ?? 0,
                parkId: parkingId,
                latitude: parkingLat,
                longitude: parkingLng,
              };
            }
          });
        })
        .flat()
        .filter(Boolean);
    });
    res.json(parkingData);
  } catch (error) {
    next(e);
  }
};

exports.updatefavorites = async (req, res, next) => {
  const { parkingName } = req.body;
  const user = req.user;
  try {
    const userFavoriteParking = await updateFavoriteParking(
      user._id,
      parkingName
    );
    res.json(userFavoriteParking);
  } catch (error) {
    next(e);
  }
};

exports.getUserFavorites = async (req,res,next)=>{
  const {email} = req.params;
  try {
    // const user = await findUserPerEmail(email);
    // const userFavorites = user.favorites;
    res.json(email);
  } catch (error) {
    next(e)
  }
}