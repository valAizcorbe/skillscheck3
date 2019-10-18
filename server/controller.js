module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_houses()
      .then(dbResponse => res.status(200).send(dbResponse))
      .catch(err => {
        res.status(500).send({ errMessage: "iT's nOt wOrkInG" });
      });
  },
  addHouse: (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip } = req.body.newHouse;
    db.add_house([name, address, city, state, zip])
      .then(data => res.status(200).send(data))
      .catch(err => {
        res.status(500).send({ errMessage: "iT's nOt wOrkInG" });
      });
  },
  deleteHouse: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_house(+id)
      .then(data => res.status(200).send(data))
      .catch(err => {
        res.status(500).send({ errMessage: "iT's nOt wOrkInG" });
      });
  }
};
