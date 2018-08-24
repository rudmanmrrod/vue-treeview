import axios from 'axios';

export default {
  name: 'ListComicsComponent',
  data() {
    return {
       heroes :  [
        {
          "text": "Same but with checkboxes",
          "children": [
            {
              "text": "initially selected",
              "selected": true
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-danger"
            },
            {
              "text": "initially open",
              "icon": "fa fa-folder icon-state-default",
              "opened": true,
              "children": [
                {
                  "text": "Another node"
                }
              ]
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-warning"
            },
            {
              "text": "disabled node",
              "icon": "fa fa-check icon-state-success",
              "disabled": true
            }
          ]
        },
        {
          "text": "Same but with checkboxes",
          "opened": true,
          "children": [
            {
              "text": "initially selected",
              "selected": true
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-danger"
            },
            {
              "text": "initially open",
              "icon": "fa fa-folder icon-state-default",
              "opened": true,
              "children": [
                {
                  "text": "Another node"
                }
              ]
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-warning"
            },
            {
              "text": "disabled node",
              "icon": "fa fa-check icon-state-success",
              "disabled": true
            }
        ],
        }
      ]
    }
  },  
  methods: {
    getComics () {
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
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error.response);
      });
    },
    itemClick (node) {
      console.log(node.model.text + ' clicked !')
    }
  },
  mounted(){
    //this.getComics();
  }

}
