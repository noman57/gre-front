import axios from '../../http-config'

class PersonService {

    findAll( pageable) {
        return axios.get(`/persons?${pageable}`)
    }

    findById(id) {
        return axios.get(`/persons/${id}`)
    }

    delete(id) {
        return axios.delete(`/persons/${id}`)
    }

    createPerson(building) {
        return axios.post('/persons', building)
    }

    updatePerson(id, building) {
        return axios.patch(`/persons/${id}`, building)
    }


}

export default new PersonService()