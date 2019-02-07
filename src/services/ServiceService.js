export default class ServiceService {
    static instance = null;
    static getInstance() {
        if(ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
        }
        return this.instance
    }
    findAllServices = () =>
        fetch("http://localhost:8080/api/services")
            .then(response => response.json())
}
