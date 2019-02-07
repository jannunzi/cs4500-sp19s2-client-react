import React from 'react'
import ServiceService from '../services/ServiceService'
class ServiceDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceService = ServiceService.getInstance()
        this.state = {
            services: []
        }
    }
    componentDidMount() {
        this.serviceService
            .findAllServices()
            .then(services =>
                this.setState({
                    services: services
                })
            )
    }
    selectService = id =>
        console.log(id)
    render() {
        return(
            <div>
                <h3>Service Details</h3>
                <select
                    onChange={(e) => this.selectService(e.target.value)}
                    className="form-control">
                    {
                        this.state.services
                            .map(service =>
                                <option
                                    value={service.id}
                                    key={service.id}>
                                    {service.title}
                                </option>
                            )
                    }
                </select>
            </div>
        )
    }
}

export default ServiceDetails
