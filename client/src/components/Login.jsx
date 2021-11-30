import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../actions';


class LoginPage extends React.Component {

    render() {
        const res = this.props;
        return (
            <div>
                Login
                <br />
                {res}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(userActions.login, dispatch),
    }
}

const connectedLoginPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
export { connectedLoginPage as Login };