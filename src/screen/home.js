import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CardComponent } from '../components/card';
import { getPost } from '../redux/action';

export default function Home() {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post);

    useEffect(() => {
        dispatch(getPost());
    }, []);

    return (
        <Container fluid>
            <Row>
                {post.map(el => {
                    return (
                        <Col>
                            <CardComponent key={el.id} post={el} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
