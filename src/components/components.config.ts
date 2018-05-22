export const componentsConfig = {
  navbar: {
    visible : true,
    collapsed : false,
    leftTabs:[
      {name:'Home', target:'/home', active:true},
      {name:'About', target:'/about', disabled:true},
      {name:'Elements', target:'/elements'},
      {name:'Loading', target:'/loading'},
      {name:'Timestamping', target:'/timestamp'},
      {name:'Dropdowns', dropdown:[
        {name:'Dropdown-home', target:'/home'},
        {name:'Dropdown-about', target:'/about'}
      ]}
    ],
    rightTabs:[],
    searchBar:{
      visible:false
    }
  },
 footer: {
    visible : true,
    hide() { this.visible = false; },
    show() { this.visible = true; },
    toggle() {this.visible = !this.visible; }
  }
}
