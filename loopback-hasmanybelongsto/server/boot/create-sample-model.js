module.exports = function (app) {
  let ds = app.dataSources.mysqlDs;
  ds.automigrate('articles');
  ds.automigrate('tags');
  ds.automigrate('authors');
  ds.automigrate('tagsarticles');
  // ds.autoupdate('articlesTags');
}
