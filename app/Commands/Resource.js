const fs = require("fs");
const Helpers = use('Helpers')
'use strict'

const { Command } = require('@adonisjs/ace')


class Resource extends Command {
  static get signature () {
    return 'make:resource {name: Reource name}'
  }

  static get description () {
    return 'Create controller, model and service'
  }

  async handle (args, options) {
    let {name} = args;
    name = this.capitalize(name);
    this.buildController(name);
    this.buildModel(name);
    this.buildService(name);

  }

  buildController(name) {
    const template = `
'use strict'
const ApiController = use('App/Controllers/Http/ApiController')

class ${name}Controller extends ApiController {
  static get inject () {
    return ['App/Services/${name}Service']
  }
}

module.exports = ${name}Controller;`;

    this.buildFile(`Controllers/Http/${name}Controller.js`, template);
  }

  buildModel(name) {
    const template = `
'use strict'
const Model = use('Model')
class ${name} extends Model {}
module.exports = ${name};`
    this.buildFile(`Models/${name}.js`, template)
  }

  buildService(name) {
    const template = `
'use strict'
const Database = use('Database')
const ModelService = use('App/Services/ModelService')
class ${name}Service extends ModelService {
  static get inject () {
    return ['App/Models/${name}']
  }
  getRelations() {
    return [];
  }
}
module.exports = ${name}Service`;

    this.buildFile(`Services/${name}Service.js`, template);

  }

  capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  async buildFile(filename, content) {

    this.writeFile(Helpers.appRoot('/app/' + filename), content).then((data) => {
      console.info(Helpers.appRoot('/app/' + filename))
    }).catch((e) => console.info(e));

    /*
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, content, (err, data) => {
        if(err) {
          this.error(err);
          return reject(err)
        }
        resolve(data)
      });
    });
    */
  }


}

module.exports = Resource
