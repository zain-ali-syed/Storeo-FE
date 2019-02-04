import React from 'react';

const LoginForm = () => {
    return (
        <section className="section section-login">
            <div className="valign-wrapper row login-box">
                <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form action="" method="POST">
                        <div className="card-content">
                            <span className="card-title grey-text">Please login</span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label for="text">User ID</label>
                                    <input type="text" className="validate" name="uid" id="userid" />
                                </div>
                                <div className="input-field col s12">
                                    <label for="password">Password </label>
                                    <input type="password" className="validate" name="pwd" id="password" />
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <input type="reset" id="reset" className="btn-flat pink-text waves-effect" />
                            <input type="submit" className="btn grey waves-effect waves-light white-text" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;