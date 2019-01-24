/**
 * @TODO: 파라미터 활용 예시 작업 필요.
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { $themeColor, $themeColor2 } from '../styles/theme'
import Layout, {ILayout} from '../components/Layout'

const Container = styled.div``
const H2 = styled.h2`
    background-color: ${$themeColor};
    color: ${$themeColor2};
`

interface IParam extends ILayout {}

class Param extends Component<IParam> {
    static getInitialProps() {}
    render() {
        return (
            <Layout>
                <Container>
                    <H2>Param Page</H2>
                </Container>
            </Layout>
        )
    }
}

export default Param