import Vue from "vue";
import Router from "vue-router";
import CreateBuilding from "@/components/create/CreateBuilding";
import UpdateBuilding from "@/components/update/UpdateBuilding";
import ListBuilding from "@/components/list/ListBuilding";
import ListPerson from "@/components/list/ListPerson";
import CreatePerson from "@/components/create/CreatePerson";
import UpdatePerson from "@/components/update/UpdatePerson";
import ListProject from "@/components/list/ListProject";
import CreateProject from "@/components/create/CreateProject";
import UpdateProject from "@/components/update/UpdateProject";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
        name: 'CreateBuilding',
        path: '/create-building',
        component: CreateBuilding
        },
        {
            name: 'UpdateBuilding',
            path: '/update-building',
            component: UpdateBuilding
        },
        {
            name: 'ListBuilding',
            path: '/list-building',
            component: ListBuilding
        },
        {
            name: 'ListPerson',
            path: '/list-person',
            component: ListPerson
        },{
            name: 'CreatePerson',
            path: '/create-person',
            component: CreatePerson
        },
        {
            name: 'UpdatePerson',
            path: '/update-person',
            component: UpdatePerson
        },
        {
            name: 'ListProject',
            path: '/list-project',
            component: ListProject
        },{
            name: 'CreateProject',
            path: '/create-project',
            component: CreateProject
        },
        {
            name: 'UpdateProject',
            path: '/update-project',
            component: UpdateProject
        }
        ]
});