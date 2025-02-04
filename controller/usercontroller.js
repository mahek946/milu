var user = require("../model/usermodel");
exports.insert  = async(req,res)=>{
    user.create(req.body);
    res.status(200).json({
        status: "success"
    })
}

exports.get_data  = async(req,res)=>{
    // var data = await user.find()
    // res.status(200).json({
    //     status: "success",
    //     data
    // })
    var limit = 3
    var page_no = req.query.page_no;
    if(page_no==undefined){
        page_no = 1;
    }
    var start = (page_no-1)*limit;
    var total_reco = await user.find().countDocuments();
    var total_page = Math.ceil(total_reco/limit);
    var data = await user.find().skip(start).limit(limit);
    res.status(200).json({
        status: "success",
        data,
        page_no,
        total_page
    })
}

exports.get_update_data  = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findById(id); 
    res.status(200).json({
        status: "success",
        data
    })
}

exports.update_data  = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body); 
    res.status(200).json({
        status: "success",
        data
    })
}

exports.delete_data  = async(req,res)=>{
    var id = req.params.id;
    var data = await user.findByIdAndDelete(id)
    res.status(200).json({
        status: "success",
        data
    })
}