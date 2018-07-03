use history;

db.history.remove({});

db.history.insert([

{
  data_date: -753,
 	content: "21 April 	Rome was founded."
},

{
  data_date: -673,
  content: "Tullus Hostilius became King of Rome."
},

{
  data_date: -667,
  content: "Byzantium was founded by Megarian colonists."
},

{
  data_date: -642,
  content: "Tullus Hostilius died. 	The Curiate Assembly, one of the legislative assemblies of the Roman Kingdom, elected Ancus Marcius King of Rome."
},

  {
    data_date: -617,
    content: "Ancus Marcius died."
  },

{
  data_date: -616,
  content: "The Curiate Assembly elected Lucius Tarquinius Priscus King of Rome."
}
]);
