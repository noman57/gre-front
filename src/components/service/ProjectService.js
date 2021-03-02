import axios from '../../http-config'

class PersonService {

    findAll( pageable) {
        return axios.get(`/projects?${pageable}`)
    }

    findById(id) {
        return axios.get(`/projects/${id}`)
    }

    delete(id) {
        return axios.delete(`/projects/${id}`)
    }

    createProject(building) {
        return axios.post('/projects', building)
    }

    updateProject(id, project) {
        return axios.patch(`/projects/${id}`, project)
    }


}

export default new PersonService()