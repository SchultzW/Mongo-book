const Author= require('../models/author');


//display all authors
exports.author_list=function(req,res){
    res.send('not implemented:Author list');
};

//display detail page for specfic author
exports.author_detail_get=function(req,res){
    res.send('not impletmented:Author detail '+req.params.id);
};

//display Author create form on GET
exports.author_create_get=function(req,res)
{
    res.send('NOT IMPLEMENTED: author create post');
};

//display author delete form on GET
exports.author_delete_get=function(req,res){
    res.send('NOT IMPLEMENTED: author delete GET');
};

//handle author delete on POST.
exports.author_delete_post=function(req,res){
    res.send('NOT IMPLEMENTED:Author delete post');
};

//handle author update GET
exports.author_update_get=function(req,res){
    res.send('NOT IMPLEMENTED:Author update GET');
};

//handle Author update on POST
exports.author_update_post=function(req,res){
    res.send('NOT IMPLEMENTED: author update POST')
}