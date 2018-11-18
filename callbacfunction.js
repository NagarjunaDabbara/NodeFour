function abc(shiva,nagarjuna){
 shiva({});
 nagarjuna({});
}
abc(function(req,res){
  console.log(req);
  console.log(res);
});