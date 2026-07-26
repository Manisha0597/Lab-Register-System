const db = require("../database/database");

// GET ALL SAMPLES
exports.getSamples = (req, res) => {

    db.all("SELECT * FROM samples", [], (err, rows) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(rows);

    });

};

// ADD SAMPLE
exports.addSample = (req, res) => {

    const {
        patient,
        test,
        technician,
        collected,
        status,
        days
    } = req.body;

    db.run(

        `INSERT INTO samples
        (patient,test,technician,collected,status,days)
        VALUES(?,?,?,?,?,?)`,

        [
            patient,
            test,
            technician,
            collected,
            status,
            days
        ],

        function(err){

            if(err){

                return res.status(500).json(err);

            }

            res.json({

                id:this.lastID,

                message:"Sample Added Successfully"

            });

        }

    );

};

// UPDATE SAMPLE
exports.updateSample = (req,res)=>{

    const {id}=req.params;

    const {

        patient,

        test,

        technician,

        collected,

        status,

        days

    }=req.body;

    db.run(

        `UPDATE samples
        SET patient=?,
            test=?,
            technician=?,
            collected=?,
            status=?,
            days=?
        WHERE id=?`,

        [

            patient,

            test,

            technician,

            collected,

            status,

            days,

            id

        ],

        function(err){

            if(err){

                return res.status(500).json(err);

            }

            res.json({

                message:"Sample Updated"

            });

        }

    );

};

// DELETE SAMPLE
exports.deleteSample=(req,res)=>{

    const {id}=req.params;

    db.run(

        "DELETE FROM samples WHERE id=?",

        [id],

        function(err){

            if(err){

                return res.status(500).json(err);

            }

            res.json({

                message:"Sample Deleted"

            });

        }

    );

};