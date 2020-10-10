import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
/* import FaceRecognition2 from './components/FaceRecognition2/FaceRecognition2';
import FaceRecognition3 from './components/FaceRecognition3/FaceRecognition3'; */
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import backgroundParticles from './components/BackgroundParticles/backgroundParticles';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const initState = {
    input: '',
    imageUrl: '',
    box: {},
    count: 0,
    box2: {},
    box3: {},
    route: 'signin',
    imgRender: 'no',
    bounds: [],
    tst: '',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
    },
};

class App extends Component {
    constructor() {
        super();
        this.state = initState;
    }

    /*   componentDidMount(){
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(console.log)
  } */

    onInputChange(event) {
        this.setState({ input: event.target.value });
    }

    /*   calculateFaceLocation(data) {
    const ClarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box; */
    /* console.log(ClarifaiData); */
    /*     const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol : ClarifaiData.left_col * width,
      topRow : ClarifaiData.top_row * height,
      rightCol : width - (ClarifaiData.right_col * width),
      bottomRow : height - (ClarifaiData.bottom_row * height)
    }
  } */

    displayFaceBox(box) {
        this.setState({ box });
    }

    /*   displayFaceBox2(box) {
    this.setState({box2 : box})
  }
  displayFaceBox3(box) {
    this.setState({box3 : box})
  } */

    onButtonSubmit() {
        this.setState({ imageUrl: this.state.input });

        fetch('/API', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                input: this.state.input,
            }),
        })
            .then(resp => resp.json())
            .then(response => {
                if (response === 'Unable to fetch API') {
                    this.setState({ imgRender: 'no' });
                } else {
                    this.setState({ imgRender: 'yes' });
                }
                if (this.state.imgRender === 'yes') {
                    if (response) {
                        fetch('/image', {
                            method: 'put',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                id: this.state.user.id,
                            }),
                        })
                            .then(resp => resp.json())
                            .then(ent => {
                                /*           debugger;
                                  console.log(ent); */
                                this.setState(
                                    Object.assign(this.state.user, {
                                        entries: ent,
                                    })
                                );
                                this.setState({
                                    bounds: response.outputs[0].data.regions,
                                });
                            })
                            .catch(console.log);
                    }
                } else {
                    console.log('Invalid Url');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    loadUser(data) {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined,
            },
        });
    }

    onRouteChange(route, isSignedIn) {
        if (route === 'signin') {
            this.setState(initState);
        } else if (route === 'home') {
            this.setState({ isSignedIn: true });
        }

        this.setState({ route });
    }

    render() {
        const { imageUrl, box, box2, box3, isSignedIn } = this.state;
        return (
            <div className="App">
                <Particles className="particles" params={backgroundParticles} />
                <Navigation
                    isSignedIn={isSignedIn}
                    onRouteChange={this.onRouteChange.bind(this)}
                />
                {this.state.route === 'home' ? (
                    <div>
                        <Logo />
                        <Rank
                            name={this.state.user.name}
                            entries={this.state.user.entries}
                        />
                        <ImageLinkForm
                            onButtonSubmit={this.onButtonSubmit.bind(this)}
                            onInputChange={this.onInputChange.bind(this)}
                        />
                        {this.state.imgRender === 'yes' ? (
                            <FaceRecognition
                                bounds={this.state.bounds}
                                imageUrl={imageUrl}
                            />
                        ) : null}
                    </div>
                ) : this.state.route === 'signin' ? (
                    <SignIn
                        loadUser={this.loadUser.bind(this)}
                        onRouteChange={this.onRouteChange.bind(this)}
                    />
                ) : (
                    <Register
                        loadUser={this.loadUser.bind(this)}
                        onRouteChange={this.onRouteChange.bind(this)}
                    />
                )}
            </div>
        );
    }
}

export default App;
