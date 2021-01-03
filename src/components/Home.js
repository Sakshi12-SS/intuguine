import React, { Component } from 'react'
import Counter from './Counter'
import Navbar from './Navbar'
import axios from 'axios'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            api: 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
            data: { "email": "sakshisarathe446@gmail.com" },
            bearerToken: 'tTU3gFVUdP'

        };
    }

    componentDidMount() {
        axios.post(this.state.api, this.state.data, {
            headers: { "Authorization": `Bearer ${this.state.bearerToken}` }
        })
            .then(res => {
                this.setState({
                    items:res.data
                })
                console.log(res)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        
        return (
            <div>
                <Navbar />
                <main>
                    <section className="container d-flex justify-content-center" >
                        <Counter />
                        <Counter />
                        <Counter />
                        <Counter />
                        <Counter />
                    </section>

                    <section className="container d-flex justify-content-center">
                        <div className="card delivery" >
                            <div className="card-body">


                            </div>
                        </div>
                        <div className="card info-table" >
                            <div className="card-body">
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">AWB NUMBER</th>
                                            <th scope="col">TRANSPORTER</th>
                                            <th scope="col">SOURCE</th>
                                            <th scope="col">DESTINATION</th>
                                            <th scope="col">BRAND</th>
                                            <th scope="col">START DATE</th>
                                            <th scope="col">ETD</th>
                                            <th scope="col">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.items.map((item,i) => <tr key={item._id}>
                                            <td>{item.awbno}</td>
                                            <td>{item.carrier}</td>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td>{item.carrier}</td>
                                            <td>{item.createdAt}</td>
                                            <td>{item.createdAt}</td>
                                            <td>{item.current_status}</td>
                                            </tr>
                                            )
                                        }
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Home
