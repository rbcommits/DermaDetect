import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

export class question extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div data-aos="fade-up" data-aos-once="true" class="card">
                <div class="card-header">
                    <h3>Heading</h3>
                </div>
                <div class="card-content">
                    <p>Paragraph</p>
                </div>
                <div class="card-footer">
                    <h4>Footer
                    </h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(question)
