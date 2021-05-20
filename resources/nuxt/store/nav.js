export default {
    state() {
        return {
            default: [
                {to:"/admin", title:"Dashboard", icon:"fas fa-home", children:[]},
                {to:"", title:"Configurações", icon:"fas fa-cog", children:[
                    {to:"/user/me", title:"Meus dados", icon:"", children:[]},
                ]},
            ],
            
            admin: [
                {to:"/admin", title:"Dashboard", icon:"fas fa-home", children:[]},
                {to:"", title:"Configurações", icon:"fas fa-cog", children:[
                    {to:"/user/me", title:"Meus dados", icon:"", children:[]},
                    {to:"/admin/settings", title:"Configurações", icon:"", children:[]},
                ]},
            ],
        };
    },

    mutations: {},
    
    actions: {},
};