const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    login:{type:String,unique:true},
    id:{type:Number,unique:true},
    node_id:{type:String,unique:true},
    avatar_url:{type:String,unique:true},
    gravatar_id:{type:String},
    url:{type:String,unique:true},
    followers_url:{type:String,unique:true},
    following_url:{type:String,unique:true},
    gists_url:{type:String,unique:true},
    starred_url:{type:String,unique:true},
    subscriptions_url:{type:String,unique:true},
    organizations_url:{type:String,unique:true},
    repos_url:{type:String,unique:true},
    received_events_url:{type:String,unique:true},
    type:{type:String},
    site_admin:{type:Boolean},
    name:{type:String},
    company:{type:String},
    blog:{type:String},
    location:{type:String},
    email:{type:String},
    hireable:{type:Boolean},
    bio:{type:String},
    public_gists:{type:Number},
    followers:{type:Number},
    following:{type:Number},
    created_at:{type:Date},
    updated_at:{type:Date}
})

module.exports = new mongoose.model("Users",UserSchema);

