import { connect } from "react-redux";
import SecuredRoute from "./SecuredRoute";


let mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth
});

let SecuredRouteContainer = connect(mapStateToProps, {})(SecuredRoute);
export default SecuredRouteContainer;