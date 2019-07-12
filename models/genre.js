let mongoose=require('mongoose');

let Schema = new.Schema

let GenreSchema=new this.schema({
    name:{type:String,
        required:true,
        min:3,
        max:100}
});

//virtual for genre url
GenreSchema
.virtual('url')
.get(function()
{
    return '/catalog/genere'+this._id;
});

//export
module.exports=mongoose.model('Genre',GenreSchema)