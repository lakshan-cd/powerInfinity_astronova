const Planet = require("../models/planetModel");
const Trip = require("../models/tripModel");

const createTrip = async (req, res) => {
  const {
    mode,
    departureTime,
    availableSeat,
    startDate,
    endDate,
    price,
    from,
    to,
    distance,
  } = req.body;
  try {
    const trip = await Trip.create({
      mode,
      departureTime,
      availableSeat,
      startDate,
      endDate,
      price,
      from,
      to,
      distance,
    });
    const tripData = await trip.save();
    return res.send({ tripData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

const updateTrip = async (req, res) => {
  const {
    id,
    mode,
    departureTime,
    availableSeat,
    startDate,
    endDate,
    price,
    from,
    to,
  } = req.body;
  try {
    const trip = await Trip.findByIdAndUpdate(
      id,
      {
        mode,
        departureTime,
        availableSeat,
        startDate,
        endDate,
        price,
        from,
        to,
        distance,
      },
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({ error: "trip not found" });
    }

    return res.json({ trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.aggregate([
      {
        $lookup: {
          from: "planets", // Use the actual name of the collection
          localField: "from",
          foreignField: "_id",
          as: "fromPlanet"
        }
      },
      {
        $lookup: {
          from: "planets", // Use the actual name of the collection
          localField: "to",
          foreignField: "_id",
          as: "toPlanet"
        }
      },
      {
        $addFields: {
          formattedDate: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$startDate"
            }
          },
          from: { $arrayElemAt: ["$fromPlanet", 0] }, // Extract the first element of the array
          to: { $arrayElemAt: ["$toPlanet", 0] } // Extract the first element of the array
        }
      },
      {
        $project: { fromPlanet: 0, toPlanet: 0 } // Remove the intermediate fields
      },
      {
        $sort: { startDate: 1 }
      },
      {
        $group: {
          _id: "$formattedDate",
          tripsData: { $push: "$$ROOT" }
        }
      },
    ]);

    if (!trips) {
      return res.status(404).json({ error: "Trips not found" });
    }

    trips.sort((a, b) => a._id.localeCompare(b._id));

    return res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};




const getOneTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findOne({ _id: id })
      .populate("from")
      .populate("to");

    if (!trip) {
      return res.status(404).json({ error: "trip not found" });
    }

    return res.json({ trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteOneTrip = async (req, res) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findOneAndDelete({ _id: id });

    if (!trip) {
      return res.status(404).json({ error: "trip not found" });
    }

    return res.json({ trip });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// const getAllTrips = async (req, res) => {
//   try {
//     const trips = await Trip.aggregate([
//       {
//         $addFields: {
//           formattedDate: {
//             $dateToString: {
//               format: "%Y-%m-%d",
//               date: "$startDate"
//             }
//           }
//         }
//       },
//       {
//         $sort: { startDate: 1 }
//       },
//       {
//         $group: {
//           _id: "$formattedDate",
//           tripsData: { $push: "$$ROOT" }
//         }
//       },
//     ]);

//     if (!trips) {
//       return res.status(404).json({ error: "Trips not found" });
//     }

//     trips.sort((a, b) => a._id.localeCompare(b._id));

//     return res.json({ trips });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


module.exports = {
  createTrip,
  updateTrip,
  getAllTrips,
  getOneTrip,
  deleteOneTrip,
};
