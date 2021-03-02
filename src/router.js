import Vue from "vue";
import Router from "vue-router";
import CreateBuilding from "@/components/create/CreateBuilding";
import UpdateBuilding from "@/components/update/UpdateBuilding";
import ListBuilding from "@/components/list/ListBuilding";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
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
        }
        ]
});