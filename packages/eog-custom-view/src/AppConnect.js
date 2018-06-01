import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initIntroduction } from 'eog-data-layer/src/actions/introAction';
import App from './App';
const mapStateToProps = state => ({
    introductions: state.introduction,
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        initIntroduction,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);