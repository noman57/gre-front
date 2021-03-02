import axios from '../../http-config'

class BuildingService {

    findAll( pageable) {
        return axios.get(`/buildings?${pageable}`)
    }

    findById(id) {
        return axios.get(`/buildings/${id}`)
    }

    delete(id) {
        return axios.delete(`/buildings/${id}`)
    }

    createBuilding(building) {
        return axios.post('/buildings', building)
    }

    updateBuilding(id, building) {
        return axios.patch(`/buildings/${id}`, building)
    }


}

export default new BuildingService()