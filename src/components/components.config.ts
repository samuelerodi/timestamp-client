export const componentsConfig = {
  navbar: {
    visible : true,
    collapsed : false,
    title: {
      name:'Angular Bootcamp',
      target: '/',
      logo: 'angular.png'
    },
    leftTabs:[
      {name:'Home', target:'/home', active:true},
      {name:'Timestamping', target:'/timestamp'},
      {name:'Dropdowns', dropdown:[
        {name:'Dropdown-home', target:'/home'},
        {name:'Dropdown-about', target:'/about'}
      ]}
    ],
    rightTabs:[
      {name:'About', target:'/about', disabled:true},
      {name:'Elements', target:'/elements'},
      {name:'Loading', target:'/loading'}
    ],
    searchBar:{
      visible:false
    }
  },
 footer: {
    visible : true,
    fixed: true
  }
}
