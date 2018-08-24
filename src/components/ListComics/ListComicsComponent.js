import axios from 'axios';

export default {
  name: 'ListComicsComponent',
  data() {
    return {
       asyncData :  [],
       heroes: []
    }
  },  
  methods: {
    getComics (oriNode, resolve) {
      let data = {
        'apikey':'6b46e44334a56db24631af8033d776be',
        'ts':'1',
        'hash':'d916d187a1c11858352d75c90ca19823'
      };
      axios
      .get('https://gateway.marvel.com/v1/public/comics', {
       params: data
      })
      .then(response => {
        for (let comics of response.data.data.results) {
          let chars = [];
          for (let char of comics.characters.items) {
            chars.push({'text':char.name});
          }
          this.heroes.push({'text':comics.title,'children':chars})
        }
        resolve(this.heroes)
      })
      .catch(error => {
        console.log(error.response);
      });
    },
    itemClick (node) {
      console.log(node.model.text + ' clicked !')
    }
  }

}
