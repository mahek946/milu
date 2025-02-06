var user = require("../model/usermodel");
var login_status = 0;
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
    // var limit = 3
    // var page_no = req.query.page_no;
    // if(page_no==undefined){
    //     page_no = 1;
    // }
    // var start = (page_no-1)*limit;
    // var total_reco = await user.find().countDocuments();
    // var total_page = Math.ceil(total_reco/limit);
    // var data = await user.find().skip(start).limit(limit);
    var data = await user.find();
    res.status(200).json({
        status: "success",
        data,
        // page_no,
        // total_page
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

exports.login = async(req,res)=>{
    var data = await user.find({"email":req.body.email});
    if(login_status==0)
    {
        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
                login_status = 1;
                res.status(200).json({
                status: "login success"

                })
            }else{
                res.status(200).json({
                status: "check your email or password"
                })
            }
        }else{
            res.status(200).json({
            status: "check your email or password"
            })
        }    
    }else{
        res.status(200).json({
        status: "user is allready login"
        })
    }
}