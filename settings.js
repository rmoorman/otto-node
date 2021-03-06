/*  exports.dbConfig = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'otto',
      multipleStatements: true
  }*/
  exports.dbConfig="mongodb://localhost:27017/otto"


  // If you want to change the port change in /public/swagger/index.html - "  discoveryUrl: "http://localhost:5053/api-docs.json","for swagger UI
  exports.port = "5053"
  exports.baseURL = "http://localhost:5053";

  //Endpoint Declaration
  exports.discoveryEndpoint = "/.well-known/otto-configuration"
  exports.federations = "/otto/federations"
  exports.federation_entity = "/otto/federation_entity"
  exports.organization = "/otto/organization"
  exports.schema = "/otto/schema"

  //@context URL
  exports.contextSchema = "https://raw.githubusercontent.com/KantaraInitiative/wg-otto/master/schema/"
  exports.contextOrganization = "otto/organization.jsonld"
  exports.contextFederation = "otto/federation.jsonld"
  exports.contextOpenIdProvider = "openid/op.jsonld"

