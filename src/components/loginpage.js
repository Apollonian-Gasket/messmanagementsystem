import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
class LoginPage extends Component {
    render() {
        return (
            <div >
                <div>

                    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',}}>
                        <div style={{width:"500vh"}} >
                            <MDBContainer >
                                <MDBRow>
                                    <MDBCol md="6">
                                        <form>
                                            <p className="h2 text-center mb-4" style={{color:"#9e9e9e"}}>Sign in</p>
                                            <p className="h6 text-left mb-2" style={{color:"#bdbdbd"}}>Email ID</p>
                                            <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                                            <br />
                                            <p className="h6 text-left mb-2" style={{color:"#bdbdbd"}}>Password</p>
                                            <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                                            <div className="text-center mt-4" style={{backgroundColor:"#fafafa",borderRadius:10,width:200,borderWidth: 1,}}>
                                                <MDBBtn color="indigo" type="submit" style={{color:"#9e9e9e"}}>Login</MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>

                    </div>

                </div></div>




        );
    }
}

export default LoginPage;